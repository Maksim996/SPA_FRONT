<template>
    <v-row>
        <v-col cols="12">
            <div>
                <v-row>
                    <v-col cols="12">
                         <v-btn  
                            color="blue-grey"
                            class="ma-2 white--text"
                        >
                            <clipper-upload v-model="imgURL">
                                Upload image
                                <v-icon
                                    right
                                    dark
                                    >
                                    mdi-cloud-upload
                                </v-icon>
                            </clipper-upload>
                        </v-btn>
                    </v-col>
                    <v-col cols="6">
                        <clipper-fixed 
                            class="my-clipper" 
                            ref="clipper" 
                            preview="my-preview" 
                            :src="imgURL" 
                            :round="round" 
                            :grid="grid" 
                            :ratio="ratio"  
                            :bg-color="bgcolor"
                            
                        >
                            <div class="placeholder" slot="placeholder">No image</div>
                        </clipper-fixed>
                    </v-col>
                    <v-col cols="5">
                        <v-row>
                            <v-col cols="6">
                                <form>
                                    <input type="checkbox" v-model="round" @click="!round ? (ratio=1, disabledRadio=true) : disabledRadio=false ">Round <br> 
                                    <input type="checkbox" v-model="grid">Grid <br>
                                    <input type="radio" :value="1" v-model="ratio" :disabled='disabledRadio'>1:1 <br>
                                    <input type="radio" :value="1.334" v-model="ratio" :disabled='disabledRadio'>4:3 <br>
                                    <input type="radio" :value="1.777" v-model="ratio" :disabled='disabledRadio'>16:9 <br>
                                </form>
                            </v-col>
                            <v-col cols="6">
                                <form>
                                    <label>BG color</label> <br>
                                    <input type="radio" value="white" v-model="bgcolor" checked>White <br>
                                    <input type="radio" value="grey" v-model="bgcolor">Grey <br>
                                    <input type="radio" value="black" v-model="bgcolor">Black 
                                </form>  
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="10">
                                <div>Preview:</div>
                                <div :class="round ? 'circle' : '' ">
                                    <clipper-preview id="face1" name="my-preview" class="my-clipper" :class="!round ? 'border-img' : ''">
                                        <div class="placeholder" slot="placeholder">Preview area</div>
                                    </clipper-preview>
                                </div>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="6">  
                        <div>result:</div>
                        <img class="my-clipper" :class="(resultURL === '') ? '' : 'border-img'" :src="resultURL" alt="">
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-btn
                            color="info"
                            @click="getResult()"
                        >
                            Clip image
                        </v-btn>
                    </v-col>
                </v-row>
            </div>   
        </v-col>
    </v-row>
</template>
<script>
import Vue from 'vue';
import VueRx from 'vue-rx';
import VuejsClipper from 'vuejs-clipper';
import { clipperBasic } from 'vuejs-clipper';
import { clipperFixed } from 'vuejs-clipper';
import { clipperPreview } from 'vuejs-clipper';
import { clipperUpload } from 'vuejs-clipper';

Vue.use(VueRx);

export default {
    components: {
        clipperBasic,
        clipperFixed,
        clipperPreview,
        clipperUpload, 
    },
    data() { 
        return {
            imgURL: '',
            resultURL: '',
            round: false,
            grid: true,
            corner: true,
            ratio: 1,
            bgcolor: "white",
            disabledRadio: false,
        }
        },
        methods: {
            getResult () {
                const canvas = this.$refs.clipper.clip();
                this.resultURL = canvas.toDataURL("image/jpeg", 1);
                console.log(this.resultURL);
            },
        }
}

</script>

<style>
    .my-clipper {
        width: 100%;
        max-width: 700px;
    }

    .placeholder {
        text-align: center;
        padding: 20px;
        background-color: lightgray;
    }
    .border-img{
        border: 2px solid black;
    }
    .circle{
        border-radius: 50%;
        overflow: hidden;
    }
</style>