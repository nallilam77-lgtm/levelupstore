export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    const { id, paquete, monto, referencia, codigoTxn } = req.body;

    // Ya no reenvía datos basura a Google Apps Script para evitar filas fantasmas.
    // Aquí puedes integrar la API de tu proveedor de recargas (FazerCards, etc.) cuando lo necesites.
    
    return res.status(200).json({ 
      status: "success", 
      message: "Recarga procesada exitosamente",
      codigoTxn: codigoTxn 
    });

  } catch (error) {
    return res.status(500).json({ status: "error", message: "Error al procesar la recarga" });
  }
}