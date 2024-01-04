@Output() onSubmit = new EventEmitter<VendaDTO>();
@Input() btnText!: string;
valorVenda: number = 0;
itemsCarrinho: Carrinho[] = [];
funcionarios: Funcionario[] = [];
funcionarioSelecionado: number | null = null;
funcionario?: Funcionario;
vendasForm!: FormGroup;

constructor(
  private funcService: FuncionarioService,
  private route: ActivatedRoute,
  private prodService: CarrinhoService,
  private vendaService: VendaService,
  private mensagemService: MensagensService,
  private router: Router
) {}

ngOnInit(): void {
  this.funcService.listarFuncionariosAll().subscribe((response) => {
    const data = response.content;
    this.funcionarios = data;
  });
  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.funcionario = this.funcionarios.find((func) => id === func.id);

  if (this.funcionario != null) {
    this.funcionarioSelecionado = Number(this.funcionario.id);
    this.listarItems(this.funcionario.id!);
  }

  this.vendasForm = new FormGroup({
    id: new FormControl(''),
    funcionarioId: new FormControl('', [Validators.required]),
    valor: new FormControl('', [Validators.required]),
  });
}

get funcionarioId() {
  return this.vendasForm.get('funcionarioId');
}
get valor() {
  return this.vendasForm.get('valor');
}

async listarItems(id: number) {
  try {
    const response = await this.prodService
      .listarItemsAllPorIdFuncionario(id)
      .toPromise();
    const data = response!.content;
    console.log(data);
    this.itemsCarrinho = data;

    this.itemsCarrinho.forEach((item) => {
      this.valorVenda += item.produto.valor;
    });
  } catch (error) {
    console.error('Erro ao listar items:', error);
  }
}

submit() {
  if (this.vendasForm.invalid) {
    return;
  }
  this.onSubmit.emit(this.vendasForm.value);
}

selecionarFuncionario(e: Event): void {
  const target = e.target as HTMLInputElement;
  const value = target.value;
  this.funcionarioSelecionado = Number(value);
  this.listarItems(this.funcionarioSelecionado);
}