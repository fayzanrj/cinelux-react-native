interface ShowtimeProps {
    _id: string;
    time: string,
    date: string,
    screen: string
    language: string,
    movie: {
        _id: string,
        title: string,
    },
    booked?: string[]
}

export default ShowtimeProps