import React from "react";

function Input(
  {label,
  amount,
  currencyOptions,
  selectCurrency,
  onAmountChange,
  onCurrencyChange,
  readOnly
}){
    return(
        <>
        <div className="w-full bg-white
         rounded-xl p-5 shadow-md">
      <div className="flex justify-between items-center mb-3">
        <label className="text-gray-500 text-sm">{label}</label>

        <div className="flex flex-col items-end">
          <label className="text-yellow text-sm mb-1">
            Currency Type
          </label>

          <select className="bg-gray-100 rounded-lg px-3 py-2 outline-none cursor-pointer"
           value={selectCurrency}
           onChange={(e)=> onCurrencyChange(e.target.value)}>
            {currencyOptions.map((currency)=>(
                <option
                
                key={currency}
                value={currency}>
                    {currency}
                </option>
            ))}
          </select>
        </div>
      </div>

      <input
       type="number"
  value={amount}
  readOnly={readOnly}
  onChange={(e) => {
    if (!readOnly) {
      onAmountChange(Number(e.target.value));
    }
  }}
      />
    </div>
        </>
    )
}

export default Input