"use client";

import { useContext, useEffect, useState, useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Context from "@/hooks/Context";
import {
  handleChangeBrand,
  handleChangeType,
  handleClick,
  handleClickAll,
} from "@/utils/filter_helpers";

export default function FilterBlock({ base, sizes, brands, types, typeTitle }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [params, setParams] = useState({
    brand: searchParams.get("brand") ? searchParams.get("brand") : null,
    size: searchParams.get("size") ? searchParams.get("size") : null,
    additionaltype: searchParams.get("additionaltype")
      ? searchParams.get("additionaltype")
      : null,
  });

  const [selectedButtons, setSelectedButtons] = useState(
    searchParams.get("size") ? searchParams.get("size") : []
  );
  const [isChecked, setIsChecked] = useState(false);
  const [checkedBrand, setCheckedBrand] = useState(
    searchParams.get("brand") ? searchParams.get("brand") : null
  );
  const [checkedType, setCheckedType] = useState(
    searchParams.get("additionaltype")
      ? searchParams.get("additionaltype")
      : null
  );
  const { setCurrentProducts, setFiltred, setIsLoading, filterFlag } =
    useContext(Context);

  const createQueryString = useCallback(
    (key, value) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value !== null) {
        params.set(key, value);
      } else {
        params.delete(key);
      }

      return params.toString();
    },
    [searchParams]
  );

  const handleParamsUpdate = (key, value) => {
    router.push(pathname + "?" + createQueryString(key, value));
  };

  useEffect(() => {
    handleClickAll(
      base,
      params.brand,
      params.size,
      params.additionaltype,
      setIsLoading,
      filterFlag,
      setCurrentProducts,
      setFiltred
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params, filterFlag, setIsLoading]);
  return (
    <div className="side-block col-lg-2">
      <div className="side-pants material">
        <div className="side-wrap">
          {brands && <p className="side-top-h">Виробник</p>}
          <span
            className="side-span-close"
            onClick={() => {
              document
                .querySelector(".side-block")
                .classList.remove("side-block-show");
            }}
          >
            x
          </span>
        </div>
        {brands &&
          brands.map((brand, index) => {
            return (
              <div key={index}>
                <input
                  className="radios"
                  type="checkbox"
                  id={brand}
                  checked={checkedBrand === brand}
                  value={brand}
                  onChange={(e) => {
                    handleChangeBrand(
                      e,
                      setCheckedBrand,
                      checkedBrand,
                      setParams,
                      params,
                      handleParamsUpdate
                    );
                  }}
                ></input>
                <label htmlFor={brand}>{brand}</label>
              </div>
            );
          })}
      </div>
      {types && (
        <div className="side-pants chashka">
          <p className="side-top-h">{typeTitle}</p>
          {types &&
            types.map((type, index) => {
              return (
                <div key={index}>
                  <input
                    className="radios"
                    type="checkbox"
                    id={type.value}
                    checked={checkedType === type.value}
                    value={type.value}
                    onChange={(e) => {
                      handleChangeType(
                        e,
                        setCheckedType,
                        checkedType,
                        setParams,
                        params,
                        handleParamsUpdate
                      );
                    }}
                  ></input>
                  <label htmlFor={type.value}>{type.label}</label>
                </div>
              );
            })}
        </div>
      )}

      <div className="side-pants size-bust">
        <p className="side-top-h">Розмір</p>
        <div className="row size-row">
          {sizes &&
            sizes.map((size) => {
              return (
                <button
                  id={"button-" + sizes.indexOf(size)}
                  key={sizes.indexOf(size)}
                  onClick={() => {
                    handleClick(
                      sizes.indexOf(size),
                      setSelectedButtons,
                      setParams,
                      params,
                      setIsChecked,
                      isChecked,
                      selectedButtons,
                      sizes,
                      handleParamsUpdate
                    );
                  }}
                  className={`top-size-btn col-lg-3 col-2 ${
                    selectedButtons.includes(sizes.indexOf(size))
                      ? "size-checked"
                      : ""
                  }`}
                >
                  {size}
                </button>
              );
            })}
        </div>
      </div>
    </div>
  );
}
