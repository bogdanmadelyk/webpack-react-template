declare module '*.sass' {
	interface IClassNames {
		[className: string]: string
	}
	const classnames: IClassNames;
	export = classnames;
}
