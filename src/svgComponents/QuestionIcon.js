export default function QuestionIcon({ fillColor }) {
    console.log('QuestionIcon: fillColor',fillColor)
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22V21.4286M12 18C12 12.1714 18 13.6286 18 7.80114C18 0.0662857 6 0.0662857 6 7.80114" stroke={fillColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
  }