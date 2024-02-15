export async function getData(
  setProducts,
  endPoint,
  setIsLoading,
  setFilterFlag
) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/${endPoint}/new`
    );
    const data = await response.json();
    setProducts([...data]);
    setIsLoading(false);
    setFilterFlag(true);
  } catch (error) {
    console.log("Fetch data error: ", error);
  }
}
