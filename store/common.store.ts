import { SectionName } from '@/domain/types/common.types'
import { create } from 'zustand'

type CommonSlice = {
  currentSection?: SectionName
  scrollToSection?: SectionName
  navbarHeight: number
  setCurrentSection: (section: SectionName) => void
  setScrollToSection: (section: SectionName) => void
  setNavbarHeight: (height: number) => void
  resetScrollToSection: () => void
}

export const useCommonStore = create<CommonSlice>((set) => ({
  currentSection: 'home',
  scrollToSection: 'home',
  navbarHeight: 0,
  setNavbarHeight: (height) => set({ navbarHeight: height }),
  setCurrentSection: (section) => set({ currentSection: section }),
  setScrollToSection: (section) => set({ scrollToSection: section }),
  resetScrollToSection: () => set({ scrollToSection: undefined }),
}))
