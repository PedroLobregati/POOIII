export default class Musica{
    private _nome: string;
    private _banda: string;
    private _anoLancamento: number;
    private _genero : string;
    private _album : string;

    constructor(nome: string, banda: string, anoLancamento: number, genero: string, album: string){
        this._nome = nome;
        this._banda = banda;
        this._anoLancamento = anoLancamento;
        this._genero = genero;
        this._album = album;
      }

	public get nome(): string {
		return this._nome;
	}
	public get banda(): string {
		return this._banda;
	}

	public get anoLancamento(): number {
		return this._anoLancamento;
	}
	public get genero(): string {
		return this._genero;
	}

	public get album(): string {
		return this._album;
	}
	public set nome(value: string) {
		this._nome = value;
	}

	public set banda(value: string) {
		this._banda = value;
	}
	public set anoLancamento(value: number) {
		this._anoLancamento = value;
	}

	public set genero(value: string) {
		this._genero = value;
	}
	public set album(value: string) {
		this._album = value;
	}
}