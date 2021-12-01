import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductoModel } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-formulario-producto',
  templateUrl: './formulario-producto.component.html',
  styleUrls: ['./formulario-producto.component.css']
})
export class FormularioProductoComponent implements OnInit {
  public formGroup: FormGroup = new FormGroup ({});
  public productoActualizar: ProductoModel | null=null;

  constructor(private formBuilder: FormBuilder, private productoService: ProductoService, private router: Router) { }

  ngOnInit(): void {
    const actualizar = localStorage.getItem('productoActualizar');
    this.productoActualizar = actualizar ? JSON.parse(actualizar) : null;
    this.biulForm();
  }


    public biulForm(){
      this.formGroup = this.formBuilder.group({
        nombre: [this.productoActualizar?.nombre, Validators.required],
        Referencia: [this.productoActualizar?.Referencia, Validators.required],
        cantidad: [this.productoActualizar?.cantidad, Validators.required],
        valor: [this.productoActualizar?.valor, Validators.required],
        descripcion: [this.productoActualizar?.descripcion, Validators.required]
      });
    }
    public agregarProducto(){
      this.productoService.agregarProducto(this.formGroup.value).then(response =>{
        alert("Producto creado correctamente");
        this.router.navigate(['/producto']);
      }).catch(error => {
        this.router.navigate(['/error']);
      })
    }
    public actualizarProducto(){
      const producto: ProductoModel ={idproducto: this.productoActualizar?.idproducto, ...this.formGroup.value};
      console.log(producto);
      
      this.productoService.actualizarProducto(producto).then(response =>{
        if(response.message === 'Updated'){
          localStorage.clear
          alert("Producto actualizado correctamente");
          this.router.navigate(['/producto']);

        }
      }).catch(error =>{
        this.router.navigate(['/error']);

      })
    }

}
