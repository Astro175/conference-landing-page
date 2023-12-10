import scheduleData from "../../../scheduleData";
import Timestamp from "../Timestamp/Timestamp";
import './Schedule.css';

const Schedule = () => {
    const schedules = scheduleData.map((schedule) => {
        return <Timestamp 
        key={schedule.id}
        time={schedule.time}
        title={schedule.title}
        description={schedule.description}
        />
    })
    return ( 
        <section className="schedule--section">
            <svg className="vector-triangle" xmlns="http://www.w3.org/2000/svg" width="63" height="31" viewBox="0 0 63 31" fill="none">
                <path d="M63 31H0L31.5 0L63 31Z" fill="#3461FF"/>
            </svg>
            <svg className="vector-lg-sq" xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
                <path d="M0 0V38.93H38.93V0H0ZM33.51 33.51H5.42999V5.42H33.52L33.51 33.51Z" fill="#FF9D00"/>
            </svg>
            <svg className="vector-sm-sq"xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                <path d="M0 0V31H31V0H0ZM26.6841 26.684H4.32391V4.31595H26.692L26.6841 26.684Z" fill="#FF9D00"/>
            </svg>
            <svg className="vector-sm-cir" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M8.74002 0C7.01141 0 5.32165 0.512592 3.88437 1.47296C2.44708 2.43332 1.32682 3.79832 0.665311 5.39535C0.00380117 6.99237 -0.169299 8.7497 0.167936 10.4451C0.50517 12.1405 1.33759 13.6978 2.5599 14.9201C3.78221 16.1424 5.33955 16.9748 7.03494 17.3121C8.73033 17.6493 10.4877 17.4762 12.0847 16.8147C13.6817 16.1532 15.0467 15.033 16.007 13.5957C16.9674 12.1584 17.48 10.4686 17.48 8.74C17.48 7.59225 17.254 6.45573 16.8147 5.39535C16.3755 4.33496 15.7317 3.37147 14.9201 2.55989C14.1085 1.7483 13.1451 1.10452 12.0847 0.665293C11.0243 0.226067 9.88777 0 8.74002 0ZM8.74002 12.9C7.91484 12.9 7.10824 12.6552 6.42227 12.1965C5.7363 11.7379 5.20182 11.086 4.8865 10.3235C4.57118 9.56092 4.48919 8.72196 4.65091 7.91279C4.81262 7.10362 5.21076 6.36061 5.79495 5.77783C6.37914 5.19504 7.12309 4.79868 7.93264 4.63891C8.7422 4.47914 9.58095 4.56315 10.3427 4.8803C11.1045 5.19745 11.7551 5.73349 12.2121 6.42055C12.6691 7.10762 12.912 7.91483 12.91 8.74C12.8995 9.83901 12.4555 10.8894 11.6746 11.6628C10.8937 12.4362 9.83908 12.87 8.74002 12.87V12.9Z" fill="#FFC200"/>
            </svg>
            <h2 className="schedule--title">Conference Schedule</h2>
            <h4>January 24, 2024</h4>
            <article className="schedule--timestamps">
                {schedules}
            </article>
            <button className="schedule--button">Register now</button>
        </section>
     );
}
 
export default Schedule;