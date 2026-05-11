import moment from "moment"
import { Text, View } from "react-native"
import { HistoryEntry } from "../types/chat.type"
import { useCurrentUser } from "../hooks/useCurrentUser";

type BubbleChatProps = {
    history: HistoryEntry
};

export const BubbleChat = (props: BubbleChatProps) => {
    const { currentUser } =  useCurrentUser();
    if (props.history.from == currentUser._id) {
        return (
            <View style={{
                marginBottom: 15
            }}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    alignSelf: 'flex-end'
                }}>
                    <Text style={{
                        marginRight: 10,
                        fontSize: 12,
                    }}>{moment(props.history.sentTime).format('HH:MM A')}</Text>
                    <View style={{
                        backgroundColor: '#1F1D1D',
                        borderRadius: 25,
                        marginRight: 10,
                        padding: 10,
                    }}>
                        <Text style={{
                            color: 'white',
                            fontSize: 14,
                            maxWidth: 150,
                        }}>
                            {props.history.message}
                        </Text>
                    </View>
                </View>

            </View>
        )
    } else {
        return (
            <View style={{
                marginBottom: 15
            }}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <View style={{
                        backgroundColor: '#F6F6F6',
                        borderRadius: 25,
                        marginRight: 10,
                        padding: 10,
                    }}>
                        <Text style={{
                            color: 'black',
                            fontSize: 14,
                            maxWidth: 150
                        }}>
                            {props.history.message}
                        </Text>
                    </View>
                    <Text style={{
                        fontSize: 12
                    }}>{moment(props.history.sentTime).format('HH:MM A')}</Text>
                </View>
            </View>
        )
    }
}