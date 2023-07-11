export default function Menu() {

    let currentTab = null;

    const openTab = (tabID) => {
        hideAllTabs();
        deactivateAllButtons();
        if (currentTab === tabID) {
            currentTab = null;
            return;
        }
        const tabToOpen = document.querySelector(`#menu-tab-${tabID}`);
        tabToOpen.style.display = 'flex'
        const buttonToActivate = document.querySelector(`#menu-main-button-${tabID}`);
        activateButton(buttonToActivate);
        currentTab = tabID;
    }

    const hideAllTabs = () => {
        const tabs = document.querySelectorAll('.menu-tab');
        for (let tab of tabs) {
            tab.style.display = 'none';
        }
        deactivateAllButtons();
    }

    const deactivateAllButtons = () => {
        const buttons = document.querySelectorAll('.button');
        for (let button of buttons) {
            deactivateButton(button)
        }
    }

    const activateButton = (button) => {
        button.style.color = 'deeppink'
    }

    const deactivateButton = (button) => {
        button.style.color = 'black'
    }

    return(
        <section>
            <div className={'menu-main'}>
                <span id={'menu-main-button-1'} className={'button'} onClick={() => openTab(1)}>Tekstil</span>
                <span id={'menu-main-button-2'} className={'button'} onClick={() => openTab(2)}>Elektronik</span>
                <span id={'menu-main-button-3'} className={'button'} onClick={() => openTab(3)}>Kozmetik</span>
            </div>
            <div className={'menu-tabs'}>
                <div id={'menu-tab-1'} className={'menu-tab'}>
                    <div>
                        <div>
                            <span className={'subtitle'}>Giyim</span>
                            <span className={'button'}>Elbise</span>
                            <span className={'button'}>Tişört</span>
                        </div>
                        <div>
                            <span className={'subtitle'}>Ayakkabı</span>
                            <span className={'button'}>Topuklu Ayakkabı</span>
                            <span className={'button'}>Sneaker</span>
                        </div>
                    </div>
                    <div>
                        <img src="https://picsum.photos/200/300" alt="menu1"/>
                    </div>
                </div>
                <div id={'menu-tab-2'} className={'menu-tab'}>
                    <div>
                        <div>
                            <span className={'subtitle'}>Bilgisayar</span>
                            <span className={'button'}>Masaüstü</span>
                            <span className={'button'}>Dizüstü</span>
                        </div>
                        <div>
                            <span className={'subtitle'}>Telefon</span>
                            <span className={'button'}>Apple</span>
                            <span className={'button'}>Android</span>
                        </div>
                    </div>
                    <div>
                        <img src="https://picsum.photos/200/300" alt="Menu2"/>
                    </div>
                </div>
                <div id={'menu-tab-3'} className={'menu-tab'}>
                    <div>
                        <div>
                            <span className={'subtitle'}>Makyaj</span>
                            <span className={'button'}>Göz Makyajı</span>
                            <span className={'button'}>Ten Makyajı</span>
                        </div>
                        <div>
                            <span className={'subtitle'}>Saç Bakımı</span>
                            <span className={'button'}>Şampuan</span>
                            <span className={'button'}>Saç Kremi</span>
                        </div>
                    </div>
                    <div>
                        <img src="https://picsum.photos/200/300" alt="menu3"/>
                    </div>
                </div>
            </div>
        </section>
    );
}