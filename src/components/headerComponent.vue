<template>
  <div>
    <nav class="navbar-light navbar-expand-lg fixed-top" id="navbar">
      <div class="container">
        <div class="row">
          <div class="col text nav-link ">
            <span class="h7 nav-text"> You are student get discount 20%.</span>
            <a href="#" class="h6">Learn more</a>
          </div>
          <div class="col " id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item"><a class="nav-link text-uppercase" href="#expertise">Store</a></li>
              <li class="nav-item"><a class="nav-link text-uppercase" href="#education">Order Tracking</a>
              </li>
              <li class="nav-item"><a class="nav-link text-uppercase" href="#experience">FAQ</a></li>
              <li class="nav-item"><select class="nav-link text-uppercase">
                <option value="1" class="nav-link text-uppercase">EngLish</option>
                <option value="2" class="nav-link text-uppercase">VN</option>
              </select></li>
              <li class="nav-item"><select class="nav-link text-uppercase">
                <option value="1" class="nav-link text-uppercase">USD</option>
                <option value="2" class="nav-link text-uppercase">VND</option>
              </select></li>
            </ul>
          </div>
        </div>
      </div>
      <hr>
      <div class="container">
        <div class="row">
          <div class="col">
            <img src="../assets/test.png">
          </div>
          <div class=" col-6">
            <div class="input-group mb-3">
              <select class="input-group-append">
                <option value="1">All category</option>
                <option value="2">cate1</option>
              </select>
              <input type="text" class="form-control" placeholder="Recipient's username"
                     aria-label="Recipient's username" aria-describedby="basic-addon2">
              <button class="input-group-append button">
                Search
              </button>
            </div>
          </div>
          <div class="col">
            <div class="d-flex flex-row align-item-center justify-between text">
              <div class="px-1">
                <i class="fa fa-user fa-3x"></i>
              </div>
              <div class="d-flex flex-column px-2 h80">
                <div class="h7 h25pt rm cen-l">
                  Login
                </div>
                <div class="h6 h25pt rm cen-l">
                  Account
                </div>
              </div>
              <div class="px-2">
                <i class="fa fa-heart fa-3x"></i>
              </div>
              <div class="px-3">
                <i class="fa fa-shopping-cart fa-3x"></i>
              </div>
              <div class="d-flex flex-column px-2 h80">
                <div class="h7 h15pt rm cen-l">
                  Your Cart
                </div>
                <div class="h7 h15pt rm cen-l">
                  2500 $
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr>
      <div class="container">
        <div class="row ">
          <div class="col ">
            <i class="fa fa-bars"></i>
            <span class="h6">Browm all category </span>
          </div>
          <div class="col w-60">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item"><select class="nav-link text-uppercase text-menu">
                <option value="1" class="nav-link text-uppercase">Home</option>
              </select></li>
              <li class="nav-item"><select class="nav-link text-uppercase">
                <option value="1" class="nav-link text-uppercase">Shop</option>
              </select></li>
              <li class="nav-item"><select class="nav-link text-uppercase">
                <option value="1" class="nav-link text-uppercase">Product</option>
              </select></li>
              <li class="nav-item"><select class="nav-link text-uppercase">
                <option value="1" class="nav-link text-uppercase">Page</option>
              </select></li>
              <li class="nav-item"><select class="nav-link text-uppercase">
                <option value="1" class="nav-link text-uppercase">Blog</option>
              </select></li>
              <li class="nav-item"><a class="nav-link text-uppercase" href="#expertise">Contact</a></li>
              <li class="nav-item"><a class="nav-link text-uppercase" href="#education">Buy </a>
              </li>
            </ul>
          </div>
          <div class="col w-20">
            <i class="fa fa-cloud text-color"></i>
            <span class="h6">Sale $20 Off Your First Order.</span>
          </div>
        </div>
      </div>
      <div class="container">
         <div class="row">
            <div class="col">
               <tree-view-conponent></tree-view-conponent>
            </div>
         </div>
      </div>
    </nav>
  </div>
</template>
<style scoped src="@/assets/style/style.default.css"></style>
<script>
import TreeViewConponent from "@/components/TreeViewConponent.vue";

export default {
  components: {TreeViewConponent}
}
</script>