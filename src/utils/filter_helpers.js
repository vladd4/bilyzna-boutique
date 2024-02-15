export const handleClick = (
  buttonId,
  setSelectedButtons,
  setParams,
  params,
  setIsChecked,
  isChecked,
  selectedButtons,
  sizes,
  handleParamsUpdate
) => {
  let updatedSelectedButtons = [...selectedButtons];
  const buttonIndex = updatedSelectedButtons.indexOf(buttonId);

  if (buttonIndex !== -1) {
    updatedSelectedButtons.splice(buttonIndex, 1);
  } else {
    updatedSelectedButtons = [buttonId];
  }

  setSelectedButtons(updatedSelectedButtons);

  const selectedSize =
    updatedSelectedButtons.length > 0 ? sizes[updatedSelectedButtons[0]] : null;
  setParams({ ...params, size: selectedSize });
  handleParamsUpdate("size", selectedSize);
  setIsChecked(!isChecked);
};

export const handleChangeBrand = (
  e,
  setCheckedBrand,
  checkedBrand,
  setParams,
  params,
  handleParamsUpdate
) => {
  setCheckedBrand(checkedBrand === e.target.value ? null : e.target.value);
  if (e.target.checked) {
    setParams({ ...params, brand: e.target.value });
    handleParamsUpdate("brand", e.target.value);
  } else {
    setParams({ ...params, brand: null });
    handleParamsUpdate("brand", null);
  }
};

export const handleChangeType = (
  e,
  setCheckedType,
  checkedType,
  setParams,
  params,
  handleParamsUpdate
) => {
  setCheckedType(checkedType === e.target.value ? null : e.target.value);
  if (e.target.checked) {
    setParams({ ...params, additionaltype: e.target.value });
    handleParamsUpdate("additionaltype", e.target.value);
  } else {
    setParams({ ...params, additionaltype: null });
    handleParamsUpdate("additionaltype", null);
  }
};

export async function handleClickAll(
  type,
  brand,
  size,
  additionalType,
  setIsLoading,
  filterFlag,
  setCurrentProducts,
  setFiltred
) {
  setIsLoading(true);
  let url2 = "/";
  if (brand !== null) {
    url2 = `${process.env.NEXT_PUBLIC_BACKEND_API}/FindByTypeAndBrand?type=${type}&brand=${brand}`;
  }
  if (size !== null && size !== undefined) {
    url2 = `${process.env.NEXT_PUBLIC_BACKEND_API}/FindByTypeAndSize?type=${type}&size=${size}`;
  }
  if (additionalType !== null) {
    url2 = `${process.env.NEXT_PUBLIC_BACKEND_API}/FindByTypeAndAdditionalType?type=${type}&additionaltype=${additionalType}`;
  }
  if (brand !== null && size !== null && size !== undefined) {
    url2 = `${process.env.NEXT_PUBLIC_BACKEND_API}/FindByTypeAndBrandAndSize?type=${type}&brand=${brand}&size=${size}`;
  }
  if (brand !== null && additionalType !== null) {
    url2 = `${process.env.NEXT_PUBLIC_BACKEND_API}/FindByTypeAndBrandAndAdditionalType?type=${type}&brand=${brand}&additionaltype=${additionalType}`;
  }
  if (size !== null && size !== undefined && additionalType !== null) {
    url2 = `${process.env.NEXT_PUBLIC_BACKEND_API}/FindByTypeAndSizeAndAdditionalType?type=${type}&size=${size}&additionaltype=${additionalType}`;
  }
  if (
    brand !== null &&
    size !== null &&
    size !== undefined &&
    additionalType !== null
  ) {
    url2 = `${process.env.NEXT_PUBLIC_BACKEND_API}/FindByTypeAndBrandAndSizeAndAdditionalType?type=${type}&brand=${brand}&size=${size}&additionaltype=${additionalType}`;
  }
  if (url2 !== "/") {
    try {
      const response = await fetch(url2, {
        method: "GET",
      });
      const data = await response.json();
      setCurrentProducts([...data]);
      setIsLoading(false);
      setFiltred(true);
    } catch (error) {
      console.log("Filtr fetch error", error);
      setFiltred(false);
      setIsLoading(false);
    }
  } else {
    setFiltred(false);
    if (filterFlag) setIsLoading(false);
  }
}
