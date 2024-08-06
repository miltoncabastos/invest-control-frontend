import { useEffect, useState } from "react";
import axios from "axios";
import { Table, Input, Typography } from "antd";
import { columns } from './columns'

const { Search } = Input;
const { Text } = Typography;

const Custodia = () => {
    const [custodia, setCustodia] = useState([]);
    const [yearSearch, setYearSearch] = useState(new Date().getFullYear());

    useEffect(() => {
        axios.get(`https://localhost:44397/api/income-tax/custodia/${yearSearch}`)
            .then(response => {
                let dataSource = [];
                response.data.map((item, index) =>
                    dataSource.push({
                        key: index,
                        count: index + 1,
                        ...item
                    })
                );

                setCustodia(dataSource);
            })
    }, [yearSearch]);

    const onSearch = year => {
        setYearSearch(year);
    }

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', alignSelf: 'center', alignItems: 'center' }}>
                <Search
                    placeholder="informe o ano"
                    allowClear
                    enterButton="Pesquisar"
                    size="large"
                    onSearch={onSearch}
                    style={{ maxWidth: '400px' }}
                />
                <Text style={{ width: '100%', marginLeft: '10px' }} level={2}>Ano atual em análise {yearSearch}</Text>
            </div>
            <div>
                {custodia.length > 0 && <Table columns={columns} dataSource={custodia} pagination={false} />}
            </div>
        </div>
    )
}

export default Custodia;