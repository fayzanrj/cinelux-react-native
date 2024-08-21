const formatReleaseDate = (dateString: string) => {
    const [year, month, day] = dateString.split("-");
  
    const formattedDay = day.length === 1 ? `0${day}` : day;
    const formattedMonth = month.length === 1 ? `0${month}` : month;
  
    return `${formattedDay}-${formattedMonth}-${year}`;
  };
  
  export default formatReleaseDate;
  