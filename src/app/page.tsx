import ProductController from "@/app/product.controller";

export default async function Home() {
  const products = await ProductController.getAll();

  return (
    <main className="container mx-auto p-4 py-8">
      <section className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Inicio</h1>
        <p>
          Da clic en el botón para obtener datos de una API y mostrarlos en la
          pantalla.
        </p>

        <button className="border py-2 px-4 rounded-2xl">
          Obtener datos de API
        </button>

        {products && (
          <>
            <h2 className="text-2xl font-bold">Productos</h2>
            <div>
              <pre>{JSON.stringify(products, null, 2)}</pre>
            </div>
          </>
        )}
      </section>
    </main>
  );
}
