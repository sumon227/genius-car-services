import { useEffect, useState } from 'react';

const useServiceDetail = (serviceId) => {

    const [service, setService] = useState({})
    useEffect(() => {
        const url = `https://quiet-cove-29243.herokuapp.com/service/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));


    }, [serviceId])

    return [service, setService]

};

export default useServiceDetail;