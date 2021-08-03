import { useCallback, useEffect, useState, useMemo } from 'react';
import { sensorCService} from '../services';
const SensorC = () => {
    const sms = useMemo(() => ["Hi Math", "How are you", "i just test this 1", "i just test this 2", "i just test this 3"],[]);
    const [time, setTime] = useState(200)
    const sendMessage = (sms) =>{
        sensorCService.sendMessage(sms);
    }
    const randomMessage = useCallback(() => {
        setTimeout(() => {
            let text = sms[Math.floor(Math.random()*10)]
            if(text) sendMessage("C "+text);
            setTime(Math.floor(Math.random()*1000) + 200 + Math.floor(Math.random()*300))
        }, time);
    },[time, sms])
    useEffect(()=>{
        randomMessage()
    },[randomMessage])
    return <></>
}
export default SensorC