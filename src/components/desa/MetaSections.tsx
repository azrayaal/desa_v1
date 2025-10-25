import React from 'react';

interface MetaSectionsProps {
  activeMeta: string;
  currentDesa: { name: string };
  currentProducts?: any;
  currentExports?: any;
  currentTalents?: any;
}

export const MetaSections: React.FC<MetaSectionsProps> = ({
  activeMeta,
  currentDesa,
  currentProducts,
  currentExports,
  currentTalents
}) => {
  // Section M - Marketplace
  if (activeMeta === "M") {
    return (
      <>
        {/* Analisis Produk Desa */}
        {currentProducts && (
          <div className="bg-gray-800 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4">Analisis Produk Desa {currentDesa.name}</h3>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-700 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-400">{currentProducts.totalProducts}</div>
                <div className="text-sm text-gray-300">Total Produk</div>
              </div>
              <div className="bg-gray-700 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-400">{currentProducts.totalSold}</div>
                <div className="text-sm text-gray-300">Terjual</div>
              </div>
              <div className="bg-gray-700 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-yellow-400">Rp {currentProducts.revenue.toLocaleString()}</div>
                <div className="text-sm text-gray-300">Pendapatan</div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-2">No</th>
                    <th className="text-left py-2">Nama Produk</th>
                    <th className="text-left py-2">Kategori</th>
                    <th className="text-left py-2">Harga</th>
                    <th className="text-left py-2">Terjual</th>
                    <th className="text-left py-2">Stok</th>
                  </tr>
                </thead>
                <tbody>
                  {currentProducts.products.map((product: any) => (
                    <tr key={product.id} className="border-b border-gray-700">
                      <td className="py-2">{product.id}</td>
                      <td className="py-2">{product.name}</td>
                      <td className="py-2">
                        <span className="px-2 py-1 bg-gray-600 rounded text-xs">{product.category}</span>
                      </td>
                      <td className="py-2 text-green-400">Rp {product.price.toLocaleString()}</td>
                      <td className="py-2 text-blue-400">{product.sold}</td>
                      <td className="py-2 text-yellow-400">{product.stock}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Shopify Store Embed */}
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4">Shopify Store - {currentDesa.name}</h3>
          <div className="h-96">
            <iframe
              src="https://bojonggede-marketplace.myshopify.com"
              className="w-full h-full border-0 rounded-lg"
              title="Shopify Store"
            />
          </div>
        </div>
      </>
    );
  }

  // Section E - Export
  if (activeMeta === "E") {
    return (
      <>
        {/* Export Category */}
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4">Export Category</h3>
          <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500">
            <option value="All Issues">All Issues</option>
            <option value="Makanan">Makanan</option>
            <option value="Kerajinan">Kerajinan</option>
            <option value="Tekstil">Tekstil</option>
            <option value="Pertanian">Pertanian</option>
          </select>
        </div>

        {/* Analisis Export Desa */}
        {currentExports && (
          <div className="bg-gray-800 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4">Analisis Export Desa {currentDesa.name}</h3>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-700 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-400">{currentExports.totalExports}</div>
                <div className="text-sm text-gray-300">Total Export</div>
              </div>
              <div className="bg-gray-700 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-400">${currentExports.totalValue.toLocaleString()}</div>
                <div className="text-sm text-gray-300">Nilai Export</div>
              </div>
              <div className="bg-gray-700 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-yellow-400">${currentExports.revenue.toLocaleString()}</div>
                <div className="text-sm text-gray-300">Pendapatan</div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-2">No</th>
                    <th className="text-left py-2">Nama Export</th>
                    <th className="text-left py-2">Kategori</th>
                    <th className="text-left py-2">Harga (USD)</th>
                    <th className="text-left py-2">Terjual</th>
                    <th className="text-left py-2">Stok</th>
                  </tr>
                </thead>
                <tbody>
                  {currentExports.exports.map((exportItem: any) => (
                    <tr key={exportItem.id} className="border-b border-gray-700">
                      <td className="py-2">{exportItem.id}</td>
                      <td className="py-2">{exportItem.name}</td>
                      <td className="py-2">
                        <span className="px-2 py-1 bg-gray-600 rounded text-xs">{exportItem.category}</span>
                      </td>
                      <td className="py-2 text-green-400">${exportItem.price}</td>
                      <td className="py-2 text-blue-400">{exportItem.sold}</td>
                      <td className="py-2 text-yellow-400">{exportItem.stock}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Alibaba Embed */}
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4">Alibaba Store - {currentDesa.name}</h3>
          <div className="h-96">
            <iframe
              src="https://bojonggede-export.alibaba.com"
              className="w-full h-full border-0 rounded-lg"
              title="Alibaba Store"
            />
          </div>
        </div>
      </>
    );
  }

  // Section T - Talent
  if (activeMeta === "T") {
    return (
      <>
        {/* Analisis Talent Desa */}
        {currentTalents && (
          <div className="bg-gray-800 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4">Analisis Talent Desa {currentDesa.name}</h3>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-700 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-400">{currentTalents.totalTalents}</div>
                <div className="text-sm text-gray-300">Total Talent</div>
              </div>
              <div className="bg-gray-700 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-400">{currentTalents.certifiedTalents}</div>
                <div className="text-sm text-gray-300">Bersertifikat</div>
              </div>
              <div className="bg-gray-700 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-yellow-400">Rp {currentTalents.revenue.toLocaleString()}</div>
                <div className="text-sm text-gray-300">Pendapatan</div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-2">No</th>
                    <th className="text-left py-2">Nama Talent</th>
                    <th className="text-left py-2">Skill</th>
                    <th className="text-left py-2">Level</th>
                    <th className="text-left py-2">Sertifikat</th>
                    <th className="text-left py-2">Proyek</th>
                  </tr>
                </thead>
                <tbody>
                  {currentTalents.talents.map((talent: any) => (
                    <tr key={talent.id} className="border-b border-gray-700">
                      <td className="py-2">{talent.id}</td>
                      <td className="py-2">{talent.name}</td>
                      <td className="py-2">
                        <span className="px-2 py-1 bg-gray-600 rounded text-xs">{talent.skill}</span>
                      </td>
                      <td className="py-2 text-blue-400">{talent.level}</td>
                      <td className="py-2">
                        <span className={`px-2 py-1 rounded text-xs ${talent.certified ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`}>
                          {talent.certified ? 'Ya' : 'Tidak'}
                        </span>
                      </td>
                      <td className="py-2 text-yellow-400">{talent.projects}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* NIKICI Embed */}
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4">NIKICI Platform - {currentDesa.name}</h3>
          <div className="h-96">
            <iframe
              src="https://itcertification.staging.nikici.com/"
              className="w-full h-full border-0 rounded-lg"
              title="NIKICI Platform"
            />
          </div>
        </div>
      </>
    );
  }

  // Section A - Art
  if (activeMeta === "A") {
    return (
      <div className="bg-gray-800 rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4">Art Platforms - Kreativitas Desa {currentDesa.name}</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="h-64">
            <iframe
              src="https://www.instagram.com/saragatechnology/"
              className="w-full h-full border-0 rounded-lg"
              title="Instagram Saraga Technology"
            />
          </div>
          <div className="h-64">
            <iframe
              src="https://www.youtube.com/@saragatechnology"
              className="w-full h-full border-0 rounded-lg"
              title="YouTube Saraga Technology"
            />
          </div>
          <div className="h-64">
            <iframe
              src="https://www.tiktok.com/@saragatechnology"
              className="w-full h-full border-0 rounded-lg"
              title="TikTok Saraga Technology"
            />
          </div>
        </div>
      </div>
    );
  }

  return null;
};
