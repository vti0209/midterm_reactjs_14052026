import {useState} from 'react'
export default function Point() {
    const [point, setPoint] = useState({
        semester1: '',
        semester2: '',
        year: '',
        average: '',
        classification: '' 
    })
    const handleChange = (e) => {
        const {name, value} = e.target
        
        setPoint(prev => ({ 
            ...prev,
            [name]: value 
        }))
    }
    const handleOk = () => {
        const {semester1, semester2, year} = point

        const weight1 = Number(year) + 1
        const weight2 = Number(year) + 2

        let average =
            (Number(semester1) * weight1 +
            Number(semester2) * weight2)
            / (weight1 + weight2)

        let classification = ''

        if (average >= 8) {
            classification = 'Học sinh giỏi'
        } else if (average >= 6.5) {
            classification = 'Khá'
        } else if (average >= 5) {
            classification = 'Trung bình'
        } else {
            classification = 'Yếu'
        }

       setPoint(prev => ({
            ...prev,
            average,
            classification
        }))
    }    
    const handleCancel = () => {
        setPoint({
            semester1: '',
            semester2: '',
            year: '',
            average: '',
            classification: ''
        })
    }
    return (
        <div>
            Điểm kỳ 1: <input type="number" min="0" max="10" name="semester1" value={point.semester1} onChange={handleChange} placeholder="HK1" />
           <br /><br />
            Điểm kỳ 2: <input type="number" min="0" max="10" name="semester2" value={point.semester2} onChange={handleChange} placeholder="HK2" />
            <br /><br />
            Năm học: <select name="year" value={point.year} onChange={handleChange}>
                <option value="">Chọn</option>
                <option value="1">1</option>
                <option value="2">2</option>
            </select> 
            <br /> 
            {point.average && <p> ĐTB: {point.average}</p>}
            {point.classification && <p>XL: {point.classification}</p>}
            <hr />         
            <button onClick={handleOk}>OK</button> 
            <button onClick={handleCancel}>Cancel</button>
        </div>
    )
}