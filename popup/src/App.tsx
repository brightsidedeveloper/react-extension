import { wetToast } from 'bsdweb'
import send from './api/send'
import DropDown from './components/ui/DropDown'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { ThemeToggle } from './components/ui/ThemeToggle'
import Accordion from './components/ui/Accordion'
import { Button } from './components/ui/shadcn/ui/button'

export default function App() {
  const handleButtonClick = () => {
    send('log', 'Hello from popup')
      .then((res) => res && wetToast(res as string, { icon: '🚀' }))
      .catch((err) => wetToast(err, { icon: '❌' }))
  }

  return (
    <div className="min-w-[800px] min-h-[600px] size-full">
      <header className="h-12 border-b shadow-sm flex items-center justify-center">
        <div className="px-2 flex items-center justify-between w-full [max-width:1920px]">
          <span className="font-semibold text-xl">BrightSide Extension</span>
          <div className="w-fit flex items-center gap-3">
            <ThemeToggle />

            <DropDown>
              <Avatar className="size-6 rounded-full overflow-hidden">
                <AvatarImage src="https://github.com/brightsidedeveloper.png" alt="name" />
                <AvatarFallback>NAME</AvatarFallback>
              </Avatar>
            </DropDown>
          </div>
        </div>
      </header>
      <div className="p-10 w-full flex justify-center items-center flex-col gap-4 @container">
        <div className="p-8 rounded-3xl border bg-card shadow-md dark:shadow-xl w-full max-w-[600px]">
          <h3 className="text-3xl @md:text-5xl @2xl:text-7xl pb-5">Enjoy Coding!</h3>
          <div className="flex items-center gap-4">
            <p className="text-sm">You can even run code on the current tab!</p>
            <Button onClick={handleButtonClick}>Log</Button>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <img
            src={'/Bright.svg'}
            alt="BrightStack Logo"
            className="aspect-square w-20 @md:w-32 @2xl:w-48 rounded-3xl shadow-md dark:shadow-xl"
          />
          <Accordion />
        </div>
      </div>
    </div>
  )
}
