// Store는 데이터를 중앙에서 관리하기 위해 사용한다
// props, event를 사용할때 발생하는 문제점을 해소하기 위해 중앙에서 데이터를 관리
import {create} from 'zustand'

// use로 시작하는 이름은 간단하게 가져와서 사용하는 hook을 의미한다
const useAuthStore = create(set => ({
    user: null,
    setUser: newUser => set({user: newUser})
}));

export {useAuthStore};