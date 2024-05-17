"use client"
import React from 'react'
  ;

function AutomateCarousel() {
  const peoples = [
    { companyName: "دیجی کالا", bg: "bg-[#ad192b]", logo: "https://betatik.com/wp-content/uploads/2022/11/digikala.jpg", name: "اندیشه رضایی پور", desc: "اندیشه سابقه همکاری در حوزه بازاریابی دیجیتال با فرادرس و دیجی کالا را یدک می کشد!", imageURL: "https://betatik.com/wp-content/uploads/2022/11/Andishe-Rezaeepour.jpg" },
    { companyName: "دیجی کالا", bg: "bg-[#ad192b]", logo: "https://betatik.com/wp-content/uploads/2022/11/digikala.jpg", name: "اندیشه رضایی پور", desc: "اندیشه سابقه همکاری در حوزه بازاریابی دیجیتال با فرادرس و دیجی کالا را یدک می کشد!", imageURL: "https://betatik.com/wp-content/uploads/2022/11/Andishe-Rezaeepour.jpg" },
    { companyName: "دایان", bg: "bg-[#074596]", logo: "https://betatik.com/wp-content/uploads/2022/12/dayan.jpg", name: "نوید ابراهیمی", desc: "نوید مدیر ارشد بازاریابی دایان است که  7 سال تجربه کار در این حوزه را در کارنامه دارد!", imageURL: "https://betatik.com/wp-content/uploads/2022/12/navidEbrahimi.jpg" },
    { companyName: "اسنپ اکسپرس", bg: "bg-[#f79739]", logo: "https://betatik.com/wp-content/uploads/2022/11/snapexpress.jpg", name: "مجید بیگی", desc: "مجید در حوزه فنی و بک اند با INFINITE8، ابر آروان، شیپور و اسنپ اکسپرس همکاری داشته است!", imageURL: "https://betatik.com/wp-content/uploads/2022/11/majidBeygi.jpg" },
    { companyName: "نمالاین", bg: "bg-[#0093e0]", logo: "https://betatik.com/wp-content/uploads/2022/12/namaline.jpg", name: "ونوس جلالی", desc: "ونوس متخصص طراحی محصول است که تجربه راه اندازی استارت آپ موفق نمالاین را نیز در کارنامه دارد!", imageURL: "https://betatik.com/wp-content/uploads/2022/12/jalali.jpg" },
    { companyName: "دیجی کالا", bg: "bg-[#ad192b]", logo: "https://betatik.com/wp-content/uploads/2022/11/digikala.jpg", name: "احمدرضا برومند", desc: "احمدرضا در حوزه تحلیل داده با شرکت های فارابی، بیمه دات کام و دیجی کالا همکاری داشته است!", imageURL: "https://betatik.com/wp-content/uploads/2022/11/Ahmad-reza-Boroumandi.jpg" },
    { companyName: "اسنپ اکسپرس", bg: "bg-[#f79739]", logo: "https://betatik.com/wp-content/uploads/2022/11/snapexpress.jpg", name: "رضا امینی", desc: "رضا به عنوان مهندس و متخصص داده در تپسل، دیجی کالا و اسنپ فعالیت داشته است!", imageURL: "http://betatik.com/wp-content/uploads/2022/12/reza-Amini.jpg" },
    { companyName: "دایان", bg: "bg-[#074596]", logo: "https://betatik.com/wp-content/uploads/2022/12/dayan.jpg", name: "سعید غلامپور", desc: "سعید متخصص بازاریابی و مدیریت محصول است که سابقه همکاری با مجموعه دایان را در رزومه خود دارد!", imageURL: "https://betatik.com/wp-content/uploads/2022/12/saeidGholampour.jpg" },
    { companyName: "لیوم", bg: "bg-[#bf4195]", logo: "https://betatik.com/wp-content/uploads/2022/12/lium.jpg", name: "بهنام حسین زاده", desc: "بهنام هم بنیان گذار و مدیر محصول استارت لیوم است که تجربیات ارزشمندی در راه اندازی استارت آپ دارد!", imageURL: "https://betatik.com/wp-content/uploads/2022/12/hosenzadeh.jpg" },
    { companyName: "دیجی کالا", bg: "bg-[#ad192b]", logo: "https://betatik.com/wp-content/uploads/2022/11/digikala.jpg", name: "اندیشه رضایی پور", desc: "اندیشه سابقه همکاری در حوزه بازاریابی دیجیتال با فرادرس و دیجی کالا را یدک می کشد!", imageURL: "https://betatik.com/wp-content/uploads/2022/11/Andishe-Rezaeepour.jpg" },
    { companyName: "دایان", bg: "bg-[#074596]", logo: "https://betatik.com/wp-content/uploads/2022/12/dayan.jpg", name: "نوید ابراهیمی", desc: "نوید مدیر ارشد بازاریابی دایان است که  7 سال تجربه کار در این حوزه را در کارنامه دارد!", imageURL: "https://betatik.com/wp-content/uploads/2022/12/navidEbrahimi.jpg" },
    { companyName: "اسنپ اکسپرس", bg: "bg-[#f79739]", logo: "https://betatik.com/wp-content/uploads/2022/11/snapexpress.jpg", name: "مجید بیگی", desc: "مجید در حوزه فنی و بک اند با INFINITE8، ابر آروان، شیپور و اسنپ اکسپرس همکاری داشته است!", imageURL: "https://betatik.com/wp-content/uploads/2022/11/majidBeygi.jpg" },
{ companyName: "نمالاین", bg: "bg-[#0093e0]", logo: "https://betatik.com/wp-content/uploads/2022/12/namaline.jpg", name: "ونوس جلالی", desc: "ونوس متخصص طراحی محصول است که تجربه راه اندازی استارت آپ موفق نمالاین را نیز در کارنامه دارد!", imageURL: "https://betatik.com/wp-content/uploads/2022/12/jalali.jpg" },
    { companyName: "دیجی کالا", bg: "bg-[#ad192b]", logo: "https://betatik.com/wp-content/uploads/2022/11/digikala.jpg", name: "احمدرضا برومند", desc: "احمدرضا در حوزه تحلیل داده با شرکت های فارابی، بیمه دات کام و دیجی کالا همکاری داشته است!", imageURL: "https://betatik.com/wp-content/uploads/2022/11/Ahmad-reza-Boroumandi.jpg" },
    { companyName: "اسنپ اکسپرس", bg: "bg-[#f79739]", logo: "https://betatik.com/wp-content/uploads/2022/11/snapexpress.jpg", name: "رضا امینی", desc: "رضا به عنوان مهندس و متخصص داده در تپسل، دیجی کالا و اسنپ فعالیت داشته است!", imageURL: "http://betatik.com/wp-content/uploads/2022/12/reza-Amini.jpg" },
    { companyName: "دایان", bg: "bg-[#074596]", logo: "https://betatik.com/wp-content/uploads/2022/12/dayan.jpg", name: "سعید غلامپور", desc: "سعید متخصص بازاریابی و مدیریت محصول است که سابقه همکاری با مجموعه دایان را در رزومه خود دارد!", imageURL: "https://betatik.com/wp-content/uploads/2022/12/saeidGholampour.jpg" },
    { companyName: "لیوم", bg: "bg-[#bf4195]", logo: "https://betatik.com/wp-content/uploads/2022/12/lium.jpg", name: "بهنام حسین زاده", desc: "بهنام هم بنیان گذار و مدیر محصول استارت لیوم است که تجربیات ارزشمندی در راه اندازی استارت آپ دارد!", imageURL: "https://betatik.com/wp-content/uploads/2022/12/hosenzadeh.jpg" },
    { companyName: "دیجی کالا", bg: "bg-[#ad192b]", logo: "https://betatik.com/wp-content/uploads/2022/11/digikala.jpg", name: "اندیشه رضایی پور", desc: "اندیشه سابقه همکاری در حوزه بازاریابی دیجیتال با فرادرس و دیجی کالا را یدک می کشد!", imageURL: "https://betatik.com/wp-content/uploads/2022/11/Andishe-Rezaeepour.jpg" },
    { companyName: "دایان", bg: "bg-[#074596]", logo: "https://betatik.com/wp-content/uploads/2022/12/dayan.jpg", name: "نوید ابراهیمی", desc: "نوید مدیر ارشد بازاریابی دایان است که  7 سال تجربه کار در این حوزه را در کارنامه دارد!", imageURL: "https://betatik.com/wp-content/uploads/2022/12/navidEbrahimi.jpg" },
  ]
  return (
    <div className='mt-[2vh]'>
      <div className="animation scrollbar-hide mt-8 flex w-full gap-x-10 overflow-scroll ">
        {peoples.map((people, index) => (
          <div
            key={index}
            className={`relative text-contPrimary min-w-[220px] max-w-[220px] h-[230px]  rounded-md  p-5 ${people.bg} ${index === 0 && "first invisible"
              }`}
          >
            <div className='flex items-center gap-x-3 text-[0.6rem] lg:text-xs font-iranBlack'>
              <img src={people.logo} className="rounded-md w-8 h-8 object-cover" />
              {people.companyName}
            </div>
            <div className='mt-3 flex justify-between items-center'>
              <div>
                <p className='text-[0.5rem] lg:text-[0.6rem] font-iranBold'>منتور</p>
                <p className='text-[0.6rem] lg:text-xs font-iranBlack'>{people.name}</p>
              </div>
              <img src={people.imageURL} className="rounded-md w-16 h-16 object-cover" />
            </div>
            <div className='text-[0.6rem] lg:text-xs mt-6 font-iranBold'>{people.desc}</div>
          </div>
        ))}
      </div>
      <style jsx>{`
          .animation::-webkit-scrollbar {
            display: none;
          }
          .animation {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
          
          /*keyframe animations*/
          .first {
            -webkit-animation: bannermove 35s linear infinite;
            -moz-animation: bannermove 35s linear infinite;
            -ms-animation: bannermove 35s linear infinite;
            animation: bannermove 35s linear infinite;
          }
          @keyframes "bannermove" {
            0% {
              margin-left: -240px;
            }
            100% {
              margin-left: -2320px;
            }
          }
          @-moz-keyframes bannermove {
            0% {
              margin-left: -240px;
            }
            100% {
              margin-left: -2320px;
            }
          }
          @-webkit-keyframes "bannermove" {
            0% {
              margin-left: -240px;
            }
            100% {
              margin-left: -2320px;
            }
          }
          @-ms-keyframes "bannermove" {
            0% {
              margin-left: -240px;
            }
            100% {
              margin-left: -2320px;
            }
          }


          .animation2::-webkit-scrollbar {
            display: none;
          }
          .animation2 {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
          
          /*keyframe animations*/
          .first2 {
            -webkit-animation: bannermove2 40s linear infinite;
            -moz-animation: bannermove2 40s linear infinite;
            -ms-animation: bannermove2 40s linear infinite;
            animation: bannermove2 40s linear infinite;
          }
          @keyframes "bannermove2" {
            0% {
              margin-left: -2340px;
            }
            100% {
              margin-left: 0px;
            }
          }
          @-moz-keyframes bannermove2 {
            0% {
              margin-left: -2340px;
            }
            100% {
              margin-left: 0px;
            }
          }
          @-webkit-keyframes "bannermove2" {
            0% {
              margin-left: -2340px;
            }
            100% {
              margin-left: 0px;
            }
          }
          @-ms-keyframes "bannermove2" {
            0% {
              margin-left: -2340px;
            }
            100% {
              margin-left: 0px;
            }
          }

        `}</style>
    </div>
  )
}

export default AutomateCarousel