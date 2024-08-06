import { Button, Menu } from "antd";
import axios from "axios";

const MenuPrincipal = () => {
    const items = [
        {
            label: 'Home',
            key: 'home'
        },
        {
            label: 'Custódia',
            key: 'custodia'
        }
    ]

    const onClick = () => {

    }

    const importarDados = () => {
        axios.get(`https://localhost:5001/api/upload-informations/upload-for-export-b3-negociacoes`)
            .then(response => {

                console.log(response);
            })
    }

    return (
        <div>
            <Menu onClick={onClick} mode="horizontal" items={items} />
            <Button onClick={importarDados}>Importar Dados</Button>
        </div>

    )
}

export default MenuPrincipal;