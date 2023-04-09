import makeClassName from "./index";

describe('makeClassName helper function', () => {

    it('has not passed object', () => {
        const className = makeClassName('test-class-name')
        expect(className).toEqual('test-class-name')
    })

    it('has passed empty object', () => {
        const className = makeClassName('test-class-name', {})
        expect(className).toEqual('test-class-name')
    })

    it('has passed class name as empty string', () => {
        const className = makeClassName('')
        expect(className).toEqual('')
    })

    it('has passed class name as empty string with object', () => {
        const className = makeClassName('', {
            '-isValid': 1
        })
        expect(className).toEqual('-isValid')
    })

    it('has passed object with truthy param', () => {
        const className = makeClassName('test', {
            '-isValid': true,
        })
        expect(className).toEqual('test -isValid')
    })

    it('has passed object with falsy param', () => {
        const className = makeClassName('test', {
            '-isValid': false,
        })
        expect(className).toEqual('test')
    })

    it('should return class names separated by space', () => {
        const className = makeClassName('test', {
            '-isValid': true,
            '-large': true,
        })
        expect(className).toEqual('test -isValid -large')
    })
})

