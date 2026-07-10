import { useState } from 'react'
import useCurrencyInfo from './hooks/usecurrencyinfo'
import './App.css'
import Input from './components/input'

function App() {
  const[amount,setAmount]=useState()
  const[from,setFrom]=useState("USD");
  const[to,setTo]=useState("INR");
  const[convertedAmount,SetConvertedAmount]=useState(0)


  const currencyinfo=useCurrencyInfo(from);
  const options=Object.keys(currencyinfo)
  const swap = () => {
  setFrom(to);
  setTo(from);
  SetConvertedAmount(amount);
  setAmount(convertedAmount);
};

  const convert = () => {
  SetConvertedAmount(amount * currencyinfo[to]);
};
  console.log(currencyinfo);
console.log(options);
  return (
    <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundColor:'beige',
            }}
        >
            <div className='flex flex-col justify-end items-center h-10 text-2xl'>Currency Converter</div>
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <Input
                                 label="From"
                                 amount={amount}
                                 currencyOptions={options}
                                 selectCurrency={from}
                                 onAmountChange={setAmount}
                                onCurrencyChange={setFrom}
                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <Input
                                label="To"
                                amount={convertedAmount}
                                 currencyOptions={options}
                                selectCurrency={to}
                                onCurrencyChange={setTo}
                                readOnly
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert 
                        </button>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default App
