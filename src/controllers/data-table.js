const btnCerrar = document.querySelector('close')
const request = require('request-promise')


let cerrar = async (id) => {
    try {
        const response = await axios({
            method: 'delete',
            url: `/api/productos/delete/${id}`
        });
    } catch (error) {
        console.log(error);
    }
};
module.exports(cerrar())
