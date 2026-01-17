import "../Common Components Styles/prayerPageCommon.css"

export const Heading = () =>{
    return(
        <div className="Header">
            <h2>Date</h2>
            <h2>Hijri Date</h2>
            <h2>Month</h2>
            <h2>Fajr</h2>
            <h2>Dhuhr</h2>
            <h2>Asr</h2>
            <h2>Maghrib</h2>
            <h2>Isha</h2>
        </div>
    );
}

export const PrayerCard = (props) =>{
    return(
       <div className="prayerCard">
            <p>{props.Date}</p>
            <p>{props.Hijri}</p>
            <p>{props.IslamicMonth}</p>
            <p className="prayerTime">{props.Fajr}</p>
            <p className="prayerTime">{props.Dhuhr}</p>
            <p className="prayerTime">{props.Asr}</p>
            <p className="prayerTime">{props.Maghrib}</p>
            <p className="prayerTime">{props.Isha}</p>
        </div>  
    );
}