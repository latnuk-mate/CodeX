import { CurrencyRupeeIcon, ShareIcon } from '@heroicons/react/16/solid';

function DashboardRefer() {

  function copyText() {
    const copyText = document.getElementById("referCode");
    
    navigator.clipboard.writeText(copyText.textContent);
    alert("Text copied!");
  }


  return (
    <div>
    {/* main content */}

      <div className="grid mt-8 grid-cols-1 md:grid-cols-4 gap-3 p-2 lg:p-0">
       <div className="primary-bg rounded-lg col-span-2 h-fit">
      <div className="p-6"> 
          <h5 className='text-2xl mb-3'>Share the Referal code!</h5>
          <h5 className='text-gray-300 text-lg'>Short Description can be given here</h5>

          <div className="mt-5 flex items-center gap-4">
            <div className='w-full rounded-[100px] secondary-bg py-2 px-6 flex items-center justify-between'>
              <h5 className='text-gray-300 text-lg' id='referCode'>OMRxgH</h5>
              <h5 onClick={copyText} className='capitalize text-2xl highlightedText cursor-pointer'>copy code</h5>
            </div>
            <div
            className="flex items-center justify-center rounded-full w-[50px] h-[50px] secondary-bg p-3 cursor-pointer">
              <ShareIcon/>
            </div>
          </div>
      </div>

      <div className="border-t border-t-gray-400"></div>

      <div className="p-6">
        <div className="flex items-center gap-3 text-2xl mb-3">
        <i class="fa-solid fa-fire highlightedText"></i>
          <h5 className='text-gray-300'>Your Friends Reward: <span className='highlightedText'>₹200 off</span></h5>
        </div>

        <div className="flex items-center gap-3 text-2xl mb-2">
        <i class="fa-solid fa-fire highlightedText"></i>
          <h5 className='text-gray-300'>Your Reward: <span className='highlightedText'>₹200</span></h5>
        </div>
      </div>

      <div className="border-t border-t-gray-400"></div>

        <div className="p-4 mb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-xl">
              <i class="fa-solid fa-wallet highlightedText"></i>
              <h5 className='text-gray-300'>Wallet Balance <br /> <span className='text-2xl highlightedText'>₹0</span></h5>
            </div>

            <button className='px-5 py-2 primary-btn'>Withdraw Amount</button>
          </div>
        </div>

        <div className="border-t border-t-gray-400 mb-6"></div>
        </div>

        {/* second part */}
        <div className='p-2 col-span-2'>
        <div className="flex items-center gap-3 mb-4">
          <div className="primary-bg p-5 flex items-center gap-3 w-full rounded-md">
          <div
            className="flex items-center justify-center rounded-full w-[50px] h-[50px] secondary-bg p-3 cursor-pointer">
                <CurrencyRupeeIcon />
          </div>
          <h5 className='text-gray-300 text-lg'>Total Earnings <br /> <span className='text-2xl highlightedText'>₹0</span></h5>
        </div>

        <div className="primary-bg p-5 flex items-center gap-3 w-full rounded-md">
          <div
            className="flex items-center justify-center rounded-full w-[50px] h-[50px] secondary-bg p-3 cursor-pointer">
               <i class="fa-solid fa-sitemap text-xl"></i>
          </div>
          <h5 className='text-gray-300 text-xl'>Total Referals <br /> <span className='text-2xl highlightedText'>0</span></h5>
        </div>
        </div>

        {/* third section... */}
        <div className="primary-bg p-6 rounded-md">
          <h5 className='capitalize text-3xl mb-5'>How it works?</h5>
          <div className="flex items-center gap-3 mb-4">
          <div
            className="flex items-center justify-center rounded-full w-[30px] h-[30px] secondary-bg p-3 cursor-pointer">
               <i class="fa-solid fa-share-nodes"></i>
          </div>
          <h5 className='text-lg'>Share Referal
            <br />
          <span className='text-sm text-gray-400'>Give Tutedude code to friends</span></h5>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <div
            className="flex items-center justify-center rounded-full w-[30px] h-[30px] secondary-bg p-3 cursor-pointer">
              <i class="fa-solid fa-graduation-cap"></i>
          </div>
          <h5 className='text-lg'>Course Purchase
            <br />
          <span className='text-sm text-gray-400'>Friends enter your code during checkout</span></h5>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <div
            className="flex items-center justify-center rounded-full w-[30px] h-[30px] secondary-bg p-3 cursor-pointer">
             <i class="fa-solid fa-gift"></i>
          </div>
          <h5 className='text-lg'>Earn Reward
            <br />
          <span className='text-sm text-gray-400 w-[]'>
          Receive your reward after their successful enrollment. 
          Note:- You can earn maximum Rs.1000 by referring friends. 
          If you want to Promote the courses 
          Connect +917302182091 on whatsapp to get a coupon code for that.
          </span></h5>
        </div>
        </div>

        </div>
      </div>
      {/* first main content is done! */}

      <div className="mt-24 p-5">
      <table class="table-auto primary-bg xs:max-w-full sm:w-full rounded-t-lg">
      <thead className='text-sm lg:text-lg text-gray-300'>
        <tr className='space-x-4 md:space-x-32 flex items-center justify-center p-3'>
          <th>Name</th>
          <th>Courses Enrolled</th>
          <th>Date of Purchase</th>
          <th>Your Reward amount</th>
        </tr>
      </thead>
  </table>
      </div>
    </div>
  )
}

export default DashboardRefer;