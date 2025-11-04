'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface CampaignRegistration {
  id: number;
  campaignName: string;
  firstName: string;
  lastNameFather: string;
  lastNameMother: string;
  phoneNumber: string;
  email: string;
  sendEmail: boolean;
  sendEmailAt: string | null;
  sendMessage: boolean;
  sendMessageAt: string | null;
  createdAt: string;
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [registrations, setRegistrations] = useState<CampaignRegistration[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<keyof CampaignRegistration>('createdAt');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  // Contraseña secreta para acceder al admin
  const SECRET_PASSWORD = "Maxillaris2025@apofi_04112025";

  useEffect(() => {
    // Verificar si ya está autenticado (persistencia en sessionStorage)
    const authStatus = sessionStorage.getItem('adminAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
      fetchRegistrations();
    } else {
      setLoading(false);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError('');

    if (password === SECRET_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem('adminAuthenticated', 'true');
      fetchRegistrations();
    } else {
      setPasswordError('Contraseña incorrecta. Intenta nuevamente.');
      setPassword('');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('adminAuthenticated');
    setRegistrations([]);
    setSearchTerm('');
    setSortBy('createdAt');
    setSortOrder('desc');
  };

  const fetchRegistrations = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://www.support.maxillaris.pe/api6/campaigns/apofi_04112025');
      
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

      const data = await response.json();
      setRegistrations(data);
      setError(null);
    } catch (err) {
      console.error('Error fetching registrations:', err);
      setError('Error al cargar los registros');
    } finally {
      setLoading(false);
    }
  };

  const handleSort = (field: keyof CampaignRegistration) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  const filteredAndSortedRegistrations = registrations
    .filter(reg => 
      reg.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reg.lastNameFather.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reg.lastNameMother.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reg.phoneNumber.includes(searchTerm)
    )
    .sort((a, b) => {
      const aValue = a[sortBy];
      const bValue = b[sortBy];
      
      if (aValue === null && bValue === null) return 0;
      if (aValue === null) return 1;
      if (bValue === null) return -1;
      
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortOrder === 'asc' 
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }
      
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
      }
      
      return 0;
    });

  const exportToExcel = () => {
    // Crear CSV content
    const headers = [
      'ID',
      'Campaña',
      'Nombre',
      'Apellido Paterno',
      'Apellido Materno',
      'Teléfono',
      'Email',
      'Email Enviado',
      'Fecha Email',
      'Mensaje Enviado',
      'Fecha Mensaje',
      'Fecha Registro'
    ];

    const csvContent = [
      headers.join(','),
      ...filteredAndSortedRegistrations.map(reg => [
        reg.id,
        reg.campaignName,
        reg.firstName,
        reg.lastNameFather,
        reg.lastNameMother,
        reg.phoneNumber,
        reg.email,
        reg.sendEmail ? 'Sí' : 'No',
        reg.sendEmailAt || '',
        reg.sendMessage ? 'Sí' : 'No',
        reg.sendMessageAt || '',
        new Date(reg.createdAt).toLocaleString('es-ES')
      ].join(','))
    ].join('\n');

    // Crear y descargar archivo
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `registros-campana-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'No enviado';
    return new Date(dateString).toLocaleString('es-ES');
  };

  const getStatusColor = (sent: boolean) => {
    return sent ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100';
  };

  // Si no está autenticado, mostrar pantalla de login
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          {/* Login Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 border">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">🔐</div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Acceso Administrativo</h1>
              <p className="text-gray-600">Ingresa la contraseña para acceder al panel</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Contraseña de Administrador
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Ingresa la contraseña"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:ring-4 focus:ring-blue-400/30 focus:border-blue-500 transition-all duration-300"
                  required
                  autoFocus
                />
              </div>

              {passwordError && (
                <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-red-600">
                    <span className="text-xl">⚠️</span>
                    <span className="font-medium">{passwordError}</span>
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold text-lg py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                🔓 Acceder al Panel
              </button>
            </form>

            <div className="mt-8 text-center">
              <Link
                href="/"
                className="text-blue-600 hover:text-blue-800 text-sm underline"
              >
                ← Volver al Sorteo
              </Link>
            </div>
          </div>

          {/* Security Notice */}
          <div className="mt-6 text-center">
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
              <div className="flex items-center justify-center gap-2 text-yellow-800 mb-2">
                <span className="text-xl">⚠️</span>
                <span className="font-medium">Acceso Restringido</span>
              </div>
              <p className="text-yellow-700 text-sm">
                Esta página solo es accesible para administradores autorizados
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Cargando registros...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Error</h1>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={fetchRegistrations}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">🔐 Panel de Administración</h1>
              <p className="text-gray-600 mt-1">Registros de la Campaña APOFI-Maxillaris</p>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={exportToExcel}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
              >
                📊 Exportar Excel
              </button>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2"
              >
                🚪 Cerrar Sesión
              </button>
              <Link
                href="/"
                className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
              >
                🏠 Volver al Sorteo
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <span className="text-2xl">👥</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Registros</p>
                <p className="text-2xl font-bold text-gray-900">{registrations.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <span className="text-2xl">📧</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Emails Enviados</p>
                <p className="text-2xl font-bold text-gray-900">
                  {registrations.filter(r => r.sendEmail).length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <span className="text-2xl">💬</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Mensajes Enviados</p>
                <p className="text-2xl font-bold text-gray-900">
                  {registrations.filter(r => r.sendMessage).length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border">
            <div className="flex items-center">
              <div className="p-2 bg-orange-100 rounded-lg">
                <span className="text-2xl">📅</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Hoy</p>
                <p className="text-2xl font-bold text-gray-900">
                  {registrations.filter(r => 
                    new Date(r.createdAt).toDateString() === new Date().toDateString()
                  ).length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6 border mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                🔍 Buscar
              </label>
              <input
                type="text"
                id="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar por nombre, email, teléfono..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => fetchRegistrations()}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                🔄 Actualizar
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSort('id')}
                  >
                    <div className="flex items-center gap-2">
                      ID {sortBy === 'id' && (sortOrder === 'asc' ? '↑' : '↓')}
                    </div>
                  </th>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSort('firstName')}
                  >
                    <div className="flex items-center gap-2">
                      Nombre {sortBy === 'firstName' && (sortOrder === 'asc' ? '↑' : '↓')}
                    </div>
                  </th>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSort('lastNameFather')}
                  >
                    <div className="flex items-center gap-2">
                      Apellido Paterno {sortBy === 'lastNameFather' && (sortOrder === 'asc' ? '↑' : '↓')}
                    </div>
                  </th>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSort('lastNameMother')}
                  >
                    <div className="flex items-center gap-2">
                      Apellido Materno {sortBy === 'lastNameMother' && (sortOrder === 'asc' ? '↑' : '↓')}
                    </div>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Teléfono
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Estado Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Estado Mensaje
                  </th>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSort('createdAt')}
                  >
                    <div className="flex items-center gap-2">
                      Fecha Registro {sortBy === 'createdAt' && (sortOrder === 'asc' ? '↑' : '↓')}
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredAndSortedRegistrations.map((registration) => (
                  <tr key={registration.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      #{registration.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {registration.firstName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {registration.lastNameFather}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {registration.lastNameMother}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {registration.phoneNumber}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <a 
                        href={`mailto:${registration.email}`}
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        {registration.email}
                      </a>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(registration.sendEmail)}`}>
                        {registration.sendEmail ? '✅ Enviado' : '❌ Pendiente'}
                      </span>
                      {registration.sendEmailAt && (
                        <div className="text-xs text-gray-500 mt-1">
                          {formatDate(registration.sendEmailAt)}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(registration.sendMessage)}`}>
                        {registration.sendMessage ? '✅ Enviado' : '❌ Pendiente'}
                      </span>
                      {registration.sendMessageAt && (
                        <div className="text-xs text-gray-500 mt-1">
                          {formatDate(registration.sendMessageAt)}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {formatDate(registration.createdAt)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredAndSortedRegistrations.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">📭</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No se encontraron registros</h3>
              <p className="text-gray-500">
                {searchTerm ? 'Intenta con otros términos de búsqueda' : 'No hay registros en la campaña'}
              </p>
            </div>
          )}
        </div>

        {/* Pagination Info */}
        <div className="mt-6 text-center text-sm text-gray-500">
          Mostrando {filteredAndSortedRegistrations.length} de {registrations.length} registros
          {searchTerm && ` que coinciden con "${searchTerm}"`}
        </div>
      </div>
    </div>
  );
}
