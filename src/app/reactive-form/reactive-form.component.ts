import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  resumeForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.resumeForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      experience: [''],
      education: ['']
      // Add more fields as needed
    });
    (pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
  }

  onSubmit() {
    if (this.resumeForm.invalid) {
      console.log("Invalid form submission");
      return;
    }

    const formValue = this.resumeForm.value;

    const documentDefinition = {
      content: [
        { text: 'Resume', style: 'header' },
        { text: '\n' },
        { text: 'Name: ' + formValue.name },
        { text: 'Email: ' + formValue.email },
        { text: 'Phone: ' + formValue.phone },
        { text: 'Experience: ' + formValue.experience },
        { text: 'Education: ' + formValue.education },
      ],
    };

    const pdfDocGenerator = pdfMake.createPdf(documentDefinition);
    pdfDocGenerator.getBlob((blob: any) => {
      const blobURL = URL.createObjectURL(blob);
      window.open(blobURL);
    });
  }
}
