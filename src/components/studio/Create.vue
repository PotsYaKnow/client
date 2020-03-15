<template>
  <div>
    <panel class="bg-white  w-3/4 max-w-md mx-auto" title="Create Pot">
      <form autocomplete="off" class="rounded px-8 pt-2 pb-8 mb-4">
        <div class="mb-4 vertical-container-center">
          <img v-if="addedStudioPhoto" class="studioPhoto" id="studioPhoto" :src="newStudio.studioPhoto" />
          <img v-if="!addedStudioPhoto" class="studioPhoto" id="studioPhoto" :src="defaultStudioPicture" />
          <!-- body -->
          <div class="flex justify-between w-3/4">
            <label class="text-blue-700" for="upload">
              Add Photo
              <input ref="selectedStudioPhoto" accept="image/*" type="file" id="upload" v-on:change="showPreview" style="display:none">
            </label>
            <label v-on:click="restoreDefaultstudioPhoto" class="text-blue-700">
              Cancel
            </label>
          </div>
        </div>
        <div class="mb-4 vertical-container-left">
          <label class="textfield-label" for="studioName">
            Name*
          </label>
          <input v-bind:class="{ 'is-invalid': attemptSubmit && missingName }" v-model="newStudio.name" class="textfield" id="studioName" type="text" placeholder="What's your studio's name?" />
          <div v-if="attemptSubmit && missingName" class="invalid-feedback">Studio Name is required.</div>
        </div>
        <button class="btn btn-blue" v-on:click="createStudio">
          Create</button>
        <button class="btn btn-blue" v-on:click="createStudio">
          Cancel</button>
      </form>
    </panel>
  </div>
</template>
<script>
import { readAndCompressImage } from 'browser-image-resizer';
import defaultStudioPicture from "@/assets/add-image.svg"
import StudioService from '@/services/StudioService'

export default {
  name: 'StudioCreation',
  data() {
    return {
      attemptSubmit: false,
      addedStudioPhoto: false,
      defaultStudioPicture: defaultStudioPicture,
      newStudio: {
        name: null,
        studioPhoto: null,
      }
    }
  },
  computed: {
    missingName: function () {
      return this.newStudio.name == null || this.newStudio.name.trim() === ""
    }
  },

  methods: {
    async showPreview (changeEvent) {

      let input = event.target

      if (input.files) {
        let fileReader = new FileReader()

        fileReader.onload = (e) => {
          this.newStudio.studioPhoto = e.target.result
          this.addedStudioPhoto = true
        }

        fileReader.readAsDataURL((await this.resizeImage(input.files[0])))
      }


    },
    async createStudio () {
      try {
        if (this.validateForm()) {

          let formData = new FormData();

          for (let key in this.newStudio) {
            formData.append(key, this.newStudio[key]);
          }

          let response = await StudioService.create(formData)
          this.$router.push({
            name: 'studioIndex'
          })


        }
      } catch (err) {
        console.log(err)
      }
    },
    validateForm() {

      this.attemptSubmit = true;
      return this.missingName ? false : true;


    },
    async resizeImage (imageFile) {

      const config = {
        quality: 1.0,
        maxWidth: 300,
        maxHeight: 300,
        autoRotate: true,
      };

      let image = await readAndCompressImage(imageFile, config)


      return image

    },
    restoreDefaultstudioPhoto() {
      this.$refs.selectedStudioPhoto.value = ''
      this.addedStudioPhoto = false
    }
  },

  async mounted () {}

}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
textarea {
  resize: none;
  padding-left: 5px;
  width: 100%;
}

.color-field {
  width: 200px;
}

.multiselect-field {
  width: 300px;
}

.is-invalid {
  border-color: red;
}

.invalid-feedback {
  color: red;
}

.studioPhoto {
  width: 201px;
  height: 201px;
  border-radius: 12px;
}

</style>
