import Swal, { SweetAlertIcon } from 'sweetalert2';

export class Util {
  static confirmDelete() {
    return Swal.fire({
      title: '¿Estás seguro de eliminar el registro?',
      text: 'Ten cuidado, esta opción no puede ser reversada',
      icon: 'warning',
      showCancelButton: true,
      width: 400,
      buttonsStyling: false,
      confirmButtonColor: '#218838',
      cancelButtonColor: '#545B62',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
    });
  }

  static printMessage(TypeMessage: number) {
    let titleAlert: string;
    let messageAlert: string;
    let typeAlert: SweetAlertIcon;

    if (TypeMessage === 0) {
      titleAlert = 'Hecho';
      messageAlert = '¡Registro actualizado satisfactoriamente!';
      typeAlert = 'success';
    } else {
      titleAlert = 'Error';
      messageAlert = '¡No se pudo ejecutar la transacción!';
      typeAlert = 'error';
    }
    return Swal.fire(titleAlert, messageAlert, typeAlert);
  }
}



