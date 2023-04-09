import {renderHook} from "@testing-library/react";
import useMakeClassName from "./index";

describe('useMakeClassName hook', () => {

    it('should return valid string', () => {
        const {result} = renderHook(() => useMakeClassName('test-class'))

        return expect(result.current).toEqual('test-class')
    })

})
