workspace(name = "bangular")

load("@bazel_tools//tools/build_defs/repo:git.bzl", "git_repository")

git_repository(
    name = "build_bazel_rules_nodejs",
    remote = "https://github.com/bazelbuild/rules_nodejs.git",
    commit = "230d39a391226f51c03448f91eb61370e2e58c42",
)

load("@build_bazel_rules_nodejs//:defs.bzl", "check_bazel_version", "node_repositories")

check_bazel_version("0.9.0")
node_repositories(package_json = ["//:package.json"])

git_repository(
    name = "build_bazel_rules_typescript",
    remote = "https://github.com/bazelbuild/rules_typescript.git",
    commit = "eb3244363e1cb265c84e723b347926f28c29aa35"
)

load("@build_bazel_rules_typescript//:defs.bzl", "ts_setup_workspace")

ts_setup_workspace()

local_repository(
    name = "rxjs",
    path = "node_modules/rxjs/src",
)

git_repository(
    name = "com_github_bazelbuild_buildtools",
    remote = "https://github.com/bazelbuild/buildtools.git",
    # Note, this commit matches the version of buildifier in bangular/ngcontainer
    # If you change this, also check if it matches the version in the bangular/ngcontainer
    # version in /.circleci/config.yml
    commit = "b3b620e8bcff18ed3378cd3f35ebeb7016d71f71",
)

http_archive(
    name = "io_bazel_rules_go",
    url = "https://github.com/bazelbuild/rules_go/releases/download/0.7.1/rules_go-0.7.1.tar.gz",
    sha256 = "341d5eacef704415386974bc82a1783a8b7ffbff2ab6ba02375e1ca20d9b031c",
)

load("@io_bazel_rules_go//go:def.bzl", "go_rules_dependencies", "go_register_toolchains")

go_rules_dependencies()

go_register_toolchains()

# Fetching the Bazel source code allows us to compile the Skylark linter
http_archive(
    name = "io_bazel",
    url = "https://github.com/bazelbuild/bazel/archive/9755c72b48866ed034bd28aa033e9abd27431b1e.zip",
    strip_prefix = "bazel-9755c72b48866ed034bd28aa033e9abd27431b1e",
    sha256 = "5b8443fc3481b5fcd9e7f348e1dd93c1397f78b223623c39eb56494c55f41962",
)
