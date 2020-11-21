<template>
  <div class="develop">
    <div class="develop-group">
      <div class="row row-cols-1 row-cols-md-3">
        <div
          class="col mb-4"
          v-for="(item, index) in pagedata"
          :key="index"
          @click="handleDoit(index)"
        >
          <div class="card h-100">
            <!-- <img src="" class="card-img-top" alt="..." /> -->
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">
                {{ item.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { Autoapi } from "@/Autoapi";
import { PythonFlaskProduct } from "@/autoapi-python-flask";

const fs = require('fs');


export default {
  data() {
    return {
      pagedata: [
        { title: "创建数据库", text: "利用node创建数据库" },
        { title: "创建python项目", text: "创建python flask项目" },
      ],
    };
  },
  methods: {
    handleDoit(index) {
      if (index == 0) {
        // 创建数据库
        //  new Autoapi().test()
        fs.open("/文件.txt", "r", (err) => {
          if (err) {
            // console.log("error");
          } else {
            // console.log("ok");
          }
        });

      } else if (index == 1) {
        // 创建python项目
        new PythonFlaskProduct().test();
      }
    },
  },
};
</script>