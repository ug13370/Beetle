import { FormArray, FormControl, FormGroup } from '@angular/forms';

// If the password and repeat oassword matches.
export function ComparePassword(
  controlName: string,
  matchingControlName: string
) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors['mustMatch']) return;

    if (control.value !== matchingControl.value)
      matchingControl.setErrors({ mustMatch: true });
    else matchingControl.setErrors(null);
  };
}

// If the start Date is smaller tha end date.
export function CompareDate(
  startDateControlName: string,
  endDateControlName: string
) {
  return (formGroup: FormGroup) => {
    const startDateControl = formGroup.controls[startDateControlName];
    const endDateControl = formGroup.controls[endDateControlName];

    if (
      (startDateControl.errors && endDateControl.errors) ||
      startDateControl.value == '' ||
      endDateControl.value == ''
    )
      return;

    if (new Date(startDateControl.value) > new Date(endDateControl.value)) {
      endDateControl.setErrors({ endDateIslesser: true });
      startDateControl.setErrors({ startDateIsBigger: true });
    } else {
      endDateControl.setErrors(null);
      startDateControl.setErrors(null);
    }
  };
}

export function categoriesValidation(categoryControlName: any) {
  return (formGroup: FormGroup) => {
    const categoryControl = formGroup.controls[categoryControlName];
    let categoriesValidationStatus = false;
    (<FormArray>categoryControl).controls.forEach((control) => {
      if (control.value) categoriesValidationStatus = true;
    });

    if (categoriesValidationStatus) categoryControl.setErrors(null);
    else categoryControl.setErrors({ atleastOneCategoryNotSelected: true });
  };
}
