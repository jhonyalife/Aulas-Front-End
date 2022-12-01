import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  usuarios: any[] = []
  usuarioSelecionado?: any;

  constructor(
    private usuarioServico: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.onListar();
  }

  onListar(): void {
    this.usuarioServico.listarUsuarios().subscribe({
      next: (resultado: any) => this.usuarios = resultado.data
    });
  }

  onRowSelect(event: any): void{
    console.log(event);
    console.log(this.usuarioSelecionado);
    this.router.navigate(['/detalhes', this.usuarioSelecionado.id])
  }
}
