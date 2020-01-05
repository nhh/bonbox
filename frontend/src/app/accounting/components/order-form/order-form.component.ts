import {Component, OnInit} from '@angular/core';
import {NbGlobalPhysicalPosition, NbToastrService, NbWindowRef} from '@nebular/theme';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AccountingService} from '../../services/accounting.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {

  profileForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    phone: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  constructor(
    protected windowRef: NbWindowRef,
    private accountingService: AccountingService,
    private toastrService: NbToastrService
  ) {

  }

  ngOnInit() {

  }

  minimize() {
    this.windowRef.minimize();
  }

  close() {
    this.windowRef.close();
  }

  async handleSubmit() {
    const order = {
      name: this.profileForm.get('name').value,
      phone: this.profileForm.get('phone').value,
    };

    try {
      const savedId = await this.accountingService.create(order);
      this.close();
      this.toastrService.show(
        'Erfolgreich gespeichert ' + savedId,
        'Die Buchung wurde erfolgreich gespeichert!',
        {position: NbGlobalPhysicalPosition.BOTTOM_RIGHT, status: 'success'});
    } catch (e) {
      this.toastrService.show(
        'Fehler beim Speichern',
        e.toString(),
        {position: NbGlobalPhysicalPosition.BOTTOM_RIGHT, status: 'danger'});
    }


  }

}
