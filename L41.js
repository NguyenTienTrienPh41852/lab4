import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { OptionsCommon, CameraOptions, ImagePickerResponse, launchCamera } from 'react-native-image-picker'

const L41 = () => {
    const [Images, setImages] = useState(null)
    const commonOptions: OptionsCommon = {
        mediaType: 'photo',
        maxWidth: 300,
        maxHeight: 300,
    };
    const cameraOptions: CameraOptions = {
        cameraType: 'front',
        saveToPhotos: true,
        ...commonOptions,
    }
    const onOpenCamera = async () => {
        const response: ImagePickerResponse = await launchCamera(cameraOptions);
        if (response?.assets) {
            setImages(response.assets);
        } else {
            Alert.alert('có lỗi xảy ra' + response.errorMessage);
        }
    }
    return (
        <View style={styles.container}>
            <Image style={styles.avatar}
                source={{
                    uri:
                        Images?.[0]?.uri || 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASAAAACvCAMAAABqzPMLAAAAjVBMVEX///8jHyAAAAAgHB0bFhcJAAAcFxgdGRoYExQSCw0LAAP4+PgZFBUQCQv19fXe3t7v7+/m5ubY19eop6deXF2SkZGenZ2Afn9DQEGko6OJiIi2tbXS0tJZV1gvKyzExMSWlZVPTU1pZ2d0cnM7ODl4dndta2soJCVSUFG7u7swLC1IRUY3NDW/v7/LysppVETMAAAN1ElEQVR4nO1d62KyOBCtE64KKqBC8YJab63V93+8RRIQFDEJwWC/Pf/22yIwTGbOXDL5+Pgf/+Pt0Xcjb+nv5sfNYr//CY6jnb/0okFf9nO1AD3X81cQQ7VNQ9F0FEPXFMO01cs/HsKp25P9jNLQP4VBLART7zwC0sxYTscw+gd1yV3GwqmQTQ66GQtp6cp+4ldi5htgUwknhWaDFv4jMnLGCExUuqJ0XYmh6+X/14T90pH99I3jewX2zfsj62JpALo/wWoeYxUskv9WTeX2L22Yn2S/QZPoT0zQCm9sdAH2o9A7D4bFPx0OIi8cdWKxWQUpKaB//lW/Ngyhm39ZSwVz9zmr9FD98+faBtXKC1WF8V/0akMfzLzqAKw9Sosy8EYARk62NoR/TYt6YV48BnS3EdsPRFsVjLyIJs08qCR4YOeXyI5ROhjROr9EVe1b9FNKw+wXshdTYOFxW5D+5x6UTNCw+htOv7eFjBMaMD/X+7XoANZV2GMxjygVkZkZHwvWg/o/6I6uIlIXb8+uv7LVpcFIgHguGIwyNqW/uRK5KFUfBEeBH3sWZHKHYPj879uKSfYatiHY50zN1C8q8LbRxwiyhRCK//Uws/1N/PoL4OzT5aVuBBmfItxfNZXQoYnfbxjn9AOj5uxomC5hY/92hshLn93sNOiJZ5qRusg38/fL1PzAutH79FI7h4ArfJEFP3vsxmPKzFPCtOlbicMXpIo/a/5mmbEDr/mbiUEqnxeZTgdZ7yWhLZGPfXxRVqsXmO+0ylL7o45ed895l0joDUh16r9g98q7jghnfIXRq4dpKp8v1ivdabgO9oaJNnPfY37PtUrcZsuTaLN0fbHpT386utTBLNy8oJhdgIPHZuHXeJXpSqsrHkNCSrpM9PC8LhZ2cJCuwogp+zjH4b0VsD3ya/GDKYnJEjxGG7iTDoYFAYuIjjjs6DIv7tdhjT+i8kt/iXOAii4GDeYMC22htZwOedgAIZveDEyuVYpHWkT/uukCh0ayK/UxSB0Y9fP1VlAhGwKg51Mu/jl9z/X8jYMYIHo66yhGlWRSmD/Uy4zosN1KM+RjP9v1aS9wq6xPHppNTW6+sBVsY+6DMCBtQ3uBC6V9UmXQ6ekfVmPUbV9zw54YSNpXcejlE0vIorX7Dv5O5ksDHRqMMdWnNkA9xNSjaFErJjFDULPELRrkwxnUHmdOZZ+voKd/h4R2opZ5sjkmw0C7EjwK/14EdSZjiH9aXXK+SiOIiF7Tkrohs3w6SKW1u+kia1MlaJEYXO1I+/cjxgV2gUnNHzZJyGG0iAyRJBA1hXbZFajD4CBdxsdpHlqiQOaW9u/nTwKwchjUrvsrUVDrhTnfaqSLntZCD7gUiEGFiIlrTbUVbx3oLmn/3jcr5fAQNnUXx9hukwphC4RU6gs4FaiDTNo79FplhXD406UuMke8AmKgx8tEhdrhyM5YgYD6At4VFrsB6jXWaxEXGiUk2qZvAuowRKlFoAX1TUKT8akaw5DRhfGw6Aysd6G3Ws2BebWf6wiIPkbfJVyoBbVovGAYKIenVguhCip9Bh8n8JQ5zzuJBH4OnTpdk1oHPtBb6Y+P38S5SjfT2CUxfFkSB/CBxW9/Jjny7if7OwkFTpzSG8/U6/FBYeDG2EzrkivR2OIycfqDVi2EKmgsNW0cEktu98AGhamz62UCmibeoCu3EI1rGcBSZBlx5TowmFS1D8wyFQ6Hw5e+ykinusr09UTD49DiWm6eKXTAfkxqlZXQVSY76HX5BcRCJ9LEHAt3Eo5kMzvSma7hz3Yw92gmj8dCYkUDmyDGrMtrgtUE2NwxXiQS38m7qozt27cjS+ihM7SuXYBNpMQqNGFBjInNLbcbY7PRqRGy5Q1pIH6U8aoTf8qVtX0a8/xmd2Q9vb+2Yryqx520R6wPeLxE9EhjvUwUsLmlLwmn4KWK9pL1TjjXIM1K41wQGze5XscO9twOsdKyCohTXidx5IpX6UvbGXCyAWTNicH1S458Al9amiM56Mh1Y4SHcVy54ojouzwhA2ay7KonBomXRwrHlQ5HAxWXL0rmEUrL3P9c7k7fNZXHkllCfHwY+3lGAi4MiY3mpGEBY2aacz7H+nIbZHNdWx+cNChBn6VNOjYjrGyUYMttJgWA8ETO8jdTG55CX5QvIpTJFGv6UAZfr3R433DJy0REAMfK/JW5M+0qMxbcGkCyrnIaqVzOSCP3A1R0SK0xoADndyXFGrUF9DEMni8zBHxeAENqMMYbq+YxhidhmW3XKkoQAckZNyBCQB+DVdW2OgP8elUtqRqEl1jt0m4UQHl+CJmwrut+pNogYRnf2a44DZlIRw3re+eJTC9GeJCIPsne964LYJuWHsO6TKbQfSEFUak8iDfj+gDOaeKvV0GwGvmTSNQbESYtp80MJ9/pt5jIAElZSepfwEUN6W2SVcC9NpKCVdzgytDcLQEbXeYjHnWZn4cKfJU7UUiyUTJ7A56ix9NdIQ7ERbRl21oJBuKYCA8ITRVRdeo77iw6TafeBdPpdzRzHQGuJ+JqPxEGfHv2gvAV/dl0/HX4SY7ySY7zISD/uZj7k1MdFkzSQbJG4zm1micG3q5zOZnO0B7mzZBi2LGcNv6UkziSlLS07Qh4yxHPEIiZj0C9jb8eQTdV+OE6XWwj2c+S+7O6MWdsPDhh7DHi4LWzZNYE2Tt+fKzBbCU9d313whiljGxYs6mRW6vuIgA4HcWU8BjMHw0FpIEBcxabTdysvE11LqsK97/qiOcCC77oVzRPG7dYkP2qtH8+hRpd9ilM+q0ziaFjb9wTCLLjiI5n9EZs5eZHQDCn45ADuYHGBZMkYUdH5V2zxi6WIgyb6pNgmiiNR1+AjRBVf/dUjPpgIKpRTivcpSx11yo+Mo7CDI5rbEAoA0U7TJ/+6zUHnNJ8Xp/3BcsnltDTvjrcYyp5+MKJbuesePlQSIikW+VmY9IhItVrTPT6IhKqXmV4hclrsyfAWcXqlAf7TEBKCVVaakzzpW6nuwCvMdSp+BPexnoKCVV5exJJS5+x9HQy6FCkfy8CVbhwBgbSLPB+kYr92sea0VcVrMc9yNi/1uw9EQH3iZlm74hmwcPTp/qsY42aQ5Cs9Uclet6RgNQSevBhxu0ZYjat/FYbpqnI7HjU6A+sY40aBA43yhlrUx7+ivLkxyTx8TrXNgnhwE1KpS0UveY8WApklD0TiRHbMdqesOmyOZn8EwHpoZbYafzNWuDjMcbkKII7K1RnhgA1SiY4pgFQW06kJy7VvHMZ2xcoUNkMUKy4rVGgmOsQK3RD61+iQCXDEgm1aIkFSoBt8a3TqDMIhwW3jgxv+OTb6dcQ0onShSflHiDAipt0VErMWsGBUpADUQp2us5ESTYUZEGoxb1FlIpzybkahxrDythQIKlrXDxpQxSWxw7bm/wiWzQcZeQEtLzeNV1g8sP4Isge1HyGxrdfJaBc4ox4Tq19Jx2SL6dcfUfffpEKmbmFHeB13cbTRMlhIuo14mA6AIofRm5IWUjOYJI3U+kx0o3eOX42eIWElP01Sv6+U+M2gYy3yx+W+wIJaWiYux3+N+kzkh/Ax/qtd66fdEB7TB8vlJx8+qTpsQVjyB+AWEgjp+GOXWO27XMUdoxvcHlAFbVBSzzKTjIeLoR1vdzDDnJZujmmYkY7DRBGWiPMb+XurRoLOSDfok1Ow0ZG+85/zCHNQRfq5l/NRK0I8hHGlvkYXDkI0+fMP7zXhDNTCrY4k0+LkkDl2JFhvwUdci3hqSEI8r48VdLWhWAlOJAQrDBSojcSu8z0goZ+rImZg+Vr35UPR6ItBRMax2oCa/TwW7A0q/SbyO51oURAJGQXxrYMD6IskVEMtTIi8S7yuUrI2BeCaiF95LFx3hUiiVlK1t9HPlc7pBdZf8+vvc4UOBT9eOYhoQVHZdEjs8k3n9WZP5uHUwkDDjdNZbvsRrLPqGFEyks66rEYWs9WvFqEbNjdVCoGe7JoUWuqqNSYpBJSbstWsxGPLTIA3W2oW6bmR2tXjYcOUZbpgNFNhcHxgWmlIQNge9cF6WQDvuzfliaAquGk+h9//TuCO11Bl05GShfUbUkAMb5+AHkz2WtindFn2NytgaG3gidbV3VDBZhPypZP1EnPL9HfIbx4BC/7yvoNe0nQP/kLgK5xm3VEeMgSbLZeuW0ZXEmnvW95+F4NZ5MlgwwIy4qd/fPn9ghF2ME69B4PWXJ22QBG9HxPS9uxvGalTQgfGdOe456j0yk6zwbOk5qxs70OhbMteYeKCMMguMZgJmxrLgh3fRWPXmsGZYvg5XiPAasalG6aGymISgz/u6K3zbFnDYBrzMSHW2BPXcln8wnGIB+DIRP2Y0YZDZaLPCcw3ys0pUEcg+X6heK4ytx+U/LffuSjwjgLs9whvjtmh8JM0kv8sN9On2iScwqDIp9E3cfO8N3h7m7mmqALVf7dLaezu3lT/UHk+YeYLpoFGqmAMml14asmhkvtbrStbtjJyKlOsBqt17vderTa6Jd/6Jo3s5fihXlobd1dGKI1lGeEkK4rlmUYlqLrJSHaxbQvW9gX1QB609H9+N9qaDZ0+MjBm6J32lq0M7pi4cBq8tYhKR8G3g7FgWmFlJBixtZpNT7/ZbNcjWE02f1gg2xYmo4u0DXLMBO7rYzC6T+oOfdwZt+f4XZ9CH73+/1v7My+wsn0PPh39eZ//CH8B40hvXaNm6A/AAAAAElFTkSuQmCC'

                }}
            />
            <View style={{width:'100%',height:'72%',justifyContent:'flex-end',alignItems:'center'}}>
            <TouchableOpacity onPress={onOpenCamera} style={styles.button}>
                <Text style={styles.Chup}>Chụp ảnh</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default L41

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height:'100%',
        alignItems: 'center',

    },
    avatar: {
        borderRadius: 150,
        borderWidth:2,
        borderColor:'green',
        width: 200,
        height: 200
    },
    button:{
        width:'90%',
        borderRadius:10,
        height:40,
        backgroundColor:'orange',
        justifyContent:'center',
        alignItems:'center'
    }
    ,
    Chup:{
        fontSize:20,

    }

})