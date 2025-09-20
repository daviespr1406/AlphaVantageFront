export async function fetchCatalog() {
    try {
        const response = await fetch("/api/orders/catalog");
        if (!response.ok) {
            throw new Error("Error al obtener el catálogo");
        }
        return await response.json();
    } catch (error) {
        throw error;
    }

}
