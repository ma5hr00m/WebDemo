import { Navigation } from "./Navigation"
import { SideList } from "./SideList"
import { WelcomeBox } from "./WelcomeBox"
import { TextBox } from "./TextBox"
import { LinkBox } from "./LinkBox"
import { ConnBox } from "./ConnBox"

export function Main() {
    return (
        <div>
            <nav>
                <Navigation />
            </nav>
            <div>
                <SideList />
                <main>
                    <WelcomeBox />
                    <TextBox />
                    <TextBox />
                    <TextBox />
                    <TextBox />
                    <LinkBox />
                    <LinkBox />
                    <ConnBox />
                </main>
                <SideList />
            </div>
        </div>
    )
}