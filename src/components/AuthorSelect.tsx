import { useEffect, useState } from "react";
import { Select } from "@sanity/ui";
import api from "../helper/api.manager";

interface OptionType {
    title: string,
    value: string
}

const AuthorSelect = () => {
    const [options, setOptions] = useState<OptionType[]>([])
    const [value, setValue] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const response = await api.get('/users/getAdmins');
            const temp_options = []
            for (let i = 0; i < response.data.length; i++) {
                temp_options.push({
                    title: response.data[i].name,
                    value: response.data[i].id
                })
            }
            setOptions(temp_options)
            setValue(temp_options[0].value)
        };
        fetchData();
    }, [])

    return (
        <Select
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
        >
            {
                options.map((item, index) => (
                    <option key={`author_${index}`} value={item.value}>{item.title}</option>
                ))
            }
        </Select>
    )
}

export default AuthorSelect;