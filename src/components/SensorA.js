import { useCallback, useEffect, useState,useMemo } from 'react';
import { sensorAService} from '../services';
const SensorA = () => {
    const sms = useMemo(() => ["Hi Phong", "How are you", "i just test this 1", "i just test this 2", "i just test this 3"],[]);
    const [time, setTime] = useState(200)
    const sendMessage = (sms) =>{
        sensorAService.sendMessage(sms);
    }
    const randomMessage = useCallback(() => {
        setTimeout(() => {
            let text = sms[Math.floor(Math.random()*10)]
            if(text) sendMessage("A "+text);
            setTime(Math.floor(Math.random()*1000) + 200 + Math.floor(Math.random()*300))
        }, time);
    },[time, sms])
    useEffect(()=>{
        randomMessage()
    },[randomMessage])
    return <></>
}
export default SensorA