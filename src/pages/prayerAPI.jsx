import {useState, useEffect} from 'react';
import Axios from 'axios';
import { PrayerCard } from '../Common Components/prayerPageCommon';
import { Heading } from '../Common Components/prayerPageCommon';
import { Hero } from '../Common Components/heroHeader';

export const Prayer = () => {
    const [prayerTimings, setprayerTimings] = useState([]);
    
    useEffect(()=>{
        fetchPrayerTimings();
    }, [])

    const fetchPrayerTimings = async () => {
        await Axios.get("https://api.aladhan.com/v1/calendar/2026/1?latitude=51.508515&longitude=-0.1254872&method=2")
            .then((res) => {
                const prayers = [];
                const result = res.data.data;
                result.map((element) => {
                    const prayer_date = {
                        Fajr: element.timings.Fajr,
                        Dhuhr: element.timings.Dhuhr,
                        Asr: element.timings.Asr,
                        Maghrib: element.timings.Maghrib,
                        Isha: element.timings.Isha,
                        Date: element.date.readable,
                        Hijri: element.date.hijri.date,
                        IslamicMonth: element.date.hijri.month.en
                    }
                    prayers.push(prayer_date);
                });
                setprayerTimings(prayers);
            });
        }


        return(
            <>
            <Hero heading="Prayer Timings London" subheading= "January 2026"/>
            <Heading />
            {prayerTimings.map((element) => 
            <PrayerCard Date={element.Date} Fajr = {element.Fajr} Dhuhr = {element.Dhuhr}
            Asr = {element.Asr} Maghrib = {element.Maghrib} Isha = {element.Isha} 
            Hijri = {element.Hijri} IslamicMonth = {element.IslamicMonth}/>)}
            </>
        );
    }
