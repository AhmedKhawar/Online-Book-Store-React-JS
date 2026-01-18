import "../Common Components Styles/prayerPageCommon.css"

export const PrayerCard = (props) =>{
    return(
       <div className="prayerCard">
            <div className="card-header">
                <p className="date">{props.Date}</p>
            </div>
            <div className="card-body">
                <p className="hijri-info">{props.Hijri}</p>
                <p className="hijri-info">{props.IslamicMonth}</p>
                <div className="prayer-times">
                    <p className="prayerTime"><span>Fajr</span> {props.Fajr}</p>
                    <p className="prayerTime"><span>Dhuhr</span> {props.Dhuhr}</p>
                    <p className="prayerTime"><span>Asr</span> {props.Asr}</p>
                    <p className="prayerTime"><span>Maghrib</span> {props.Maghrib}</p>
                    <p className="prayerTime"><span>Isha</span> {props.Isha}</p>
                </div>
            </div>
        </div>  
    );
}