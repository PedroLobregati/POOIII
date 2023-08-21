export default class Contato{
    private _nome : string;
    private _telefone : number;
	private _email? : string |undefined;

    constructor(nome : string, telefone : number, email : string | undefined){
        this._nome = nome;
        this._telefone = telefone;
		this._email = email;
    }

	public get nome(): string {
		return this._nome;
	}

	public get telefone(): number {
		return this._telefone;
	}
	public set nome(value: string) {
		this._nome = value;
	}


	public set telefone(value: number) {
		this._telefone = value;
	}

	public get email(): string | undefined {
		return this._email;
	}
	
	public set email(value: string | undefined) {
		this._email = value;
	}
  
}