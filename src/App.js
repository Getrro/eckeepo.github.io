  
import React from 'react';
import {Div, Group, Panel, PanelHeader, View} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

class App extends React.Component {

    render() {
        return (
            <View activePanel="mainPanel">
                <Panel id="mainPanel">
                    <PanelHeader>Ваш профиль</PanelHeader>
                    <Group>
                        <Div>
                            Hello, my name Daniil. I create this app with Hilldebrand!
                        </Div>
                    </Group>
                </Panel>
            </View>
        );
    }
}

export default App;